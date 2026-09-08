import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import {
  dolphinVertexShader,
  dolphinFragmentShader,
  sparkleVertexShader,
  sparkleFragmentShader,
} from './shaders';

interface SampledPoint {
  vertexIndex: number;
  offset: THREE.Vector3;
  normal: THREE.Vector3;
  random: number;
  size: number;
}

export class Dolphin {
  public group: THREE.Group;
  public dolphinScene: THREE.Group | null = null;
  public dolphinMesh: THREE.SkinnedMesh | null = null;
  private mixer: THREE.AnimationMixer | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private sparklesMaterial: THREE.ShaderMaterial | null = null;
  private sparklesGeometry: THREE.BufferGeometry | null = null;
  private sparkles: THREE.Points | null = null;
  private linesGeometry: THREE.BufferGeometry | null = null;
  private linesMaterial: THREE.LineBasicMaterial | null = null;
  private lines: THREE.LineSegments | null = null;
  private linePositions: Float32Array | null = null;
  private lineColors: Float32Array | null = null;
  private sampledData: SampledPoint[] = [];

  private sparkleCount = 900;
  private baseConnectionDistance = 0.16;
  public connectionDistance = 0.095;
  private outset = 0.012;

  public currentScale = 0.65;
  public currentPosition = new THREE.Vector3(0, 0.05, 0);

  private _tmpBasePos = new THREE.Vector3();
  private _tmpSkinned = new THREE.Vector3();
  private _tmpLocalOut = new THREE.Vector3();
  private _tmpNormal = new THREE.Vector3();

  public isLoaded = false;

  constructor(private scene: THREE.Scene, onLoaded?: () => void) {
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.loadModel(onLoaded);
  }

  public setScale(scale: number) {
    this.currentScale = scale;
    if (this.dolphinScene) {
      this.dolphinScene.scale.set(scale, scale, scale);
    }
    this.connectionDistance = this.baseConnectionDistance * (scale / 1.1);
  }

  public setPosition(x: number, y: number, z: number) {
    this.currentPosition.set(x, y, z);
    if (this.dolphinScene) {
      this.dolphinScene.position.copy(this.currentPosition);
    }
  }

  private loadModel(onLoaded?: () => void) {
    const dracoLoader = new DRACOLoader();
    // Use local draco decoders or google CDN
    dracoLoader.setDecoderPath('/draco/gltf/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    this.material = new THREE.ShaderMaterial({
      vertexShader: dolphinVertexShader,
      fragmentShader: dolphinFragmentShader,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uBaseColor: { value: new THREE.Color(0x6fd3fb) }, // Holographic cyber cyan
      },
    });

    gltfLoader.load(
      '/assets/models/dolphin_anim.glb',
      (gltf) => {
        this.dolphinScene = gltf.scene;

        this.dolphinScene.traverse((child) => {
          if ((child as THREE.SkinnedMesh).isSkinnedMesh) {
            this.dolphinMesh = child as THREE.SkinnedMesh;
            this.dolphinMesh.material = this.material!;
          } else if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = this.material!;
          }
        });

        if (gltf.animations && gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(this.dolphinScene);
          const action = this.mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        // Adjust position & orientation - scaled so the whole dolphin and face are clearly visible
        this.dolphinScene.position.copy(this.currentPosition);
        this.dolphinScene.scale.set(this.currentScale, this.currentScale, this.currentScale);

        this.group.add(this.dolphinScene);

        // Setup sparkles and constellation lines
        if (this.dolphinMesh) {
          this.setupSurfaceSampling();
        }

        this.isLoaded = true;
        dracoLoader.dispose();
        if (onLoaded) onLoaded();
      },
      undefined,
      (error) => {
        console.warn('Dolphin GLTF load failed, using fallback procedural dolphin proxy:', error);
        this.createProceduralFallback();
        this.isLoaded = true;
        dracoLoader.dispose();
        if (onLoaded) onLoaded();
      }
    );
  }

  private createProceduralFallback() {
    // Elegant procedural cyber dolphin silhouette in case GLTF encounters network failure
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 1.8),
      new THREE.Vector3(0, 0.2, 0.9),
      new THREE.Vector3(0, 0.25, 0.0),
      new THREE.Vector3(0, 0.15, -0.8),
      new THREE.Vector3(0, 0, -1.6),
    ]);
    const geom = new THREE.TubeGeometry(curve, 32, 0.35, 12, false);
    const mesh = new THREE.Mesh(geom, this.material!);
    mesh.position.copy(this.currentPosition);
    mesh.scale.set(this.currentScale, this.currentScale, this.currentScale);
    this.group.add(mesh);
  }

  private setupSurfaceSampling() {
    if (!this.dolphinMesh) return;

    try {
      const sampler = new MeshSurfaceSampler(this.dolphinMesh).build();
      const posAttr = this.dolphinMesh.geometry.getAttribute('position');
      const tempPosition = new THREE.Vector3();
      const tempNormal = new THREE.Vector3();

      for (let i = 0; i < this.sparkleCount; i++) {
        sampler.sample(tempPosition, tempNormal);

        let closestIndex = 0;
        let closestDist = Infinity;
        const searchVec = new THREE.Vector3();

        // Sample nearby vertex to track bone deformation
        const sampleStep = Math.max(1, Math.floor(posAttr.count / 300));
        for (let v = 0; v < posAttr.count; v += sampleStep) {
          searchVec.fromBufferAttribute(posAttr, v);
          const dist = searchVec.distanceToSquared(tempPosition);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = v;
          }
        }

        this.sampledData.push({
          vertexIndex: closestIndex,
          offset: tempPosition
            .clone()
            .sub(new THREE.Vector3().fromBufferAttribute(posAttr, closestIndex)),
          normal: tempNormal.clone(),
          random: Math.random(),
          size: Math.random() * 0.5 + 0.5,
        });
      }

      const positions = new Float32Array(this.sparkleCount * 3);
      const randoms = new Float32Array(this.sparkleCount);
      const sizes = new Float32Array(this.sparkleCount);

      for (let i = 0; i < this.sparkleCount; i++) {
        randoms[i] = this.sampledData[i].random;
        sizes[i] = this.sampledData[i].size;
      }

      this.sparklesGeometry = new THREE.BufferGeometry();
      this.sparklesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
      this.sparklesGeometry.setAttribute(
        'aRandom',
        new THREE.BufferAttribute(randoms, 1)
      );
      this.sparklesGeometry.setAttribute(
        'aSize',
        new THREE.BufferAttribute(sizes, 1)
      );

      this.sparklesMaterial = new THREE.ShaderMaterial({
        vertexShader: sparkleVertexShader,
        fragmentShader: sparkleFragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uSize: { value: 34.0 },
          uColor1: { value: new THREE.Color(0x00f5d4) }, // Cyber cyan
          uColor2: { value: new THREE.Color(0x719bf8) }, // Electric blue
          uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
        },
      });

      this.sparkles = new THREE.Points(this.sparklesGeometry, this.sparklesMaterial);
      this.sparkles.frustumCulled = false;
      this.group.add(this.sparkles);

      // Setup constellation lines
      const maxConnections = this.sparkleCount * 6;
      this.linePositions = new Float32Array(maxConnections * 6);
      this.lineColors = new Float32Array(maxConnections * 6);
      this.linesGeometry = new THREE.BufferGeometry();
      this.linesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(this.linePositions, 3)
      );
      this.linesGeometry.setAttribute(
        'color',
        new THREE.BufferAttribute(this.lineColors, 3)
      );
      this.linesGeometry.setDrawRange(0, 0);

      this.linesMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      this.lines = new THREE.LineSegments(this.linesGeometry, this.linesMaterial);
      this.lines.frustumCulled = false;
      this.group.add(this.lines);

      this.updateSparklePositions();
    } catch (e) {
      console.warn('Surface sampling warning:', e);
    }
  }

  private updateSparklePositions() {
    if (!this.dolphinMesh || !this.sparklesGeometry) return;

    const positionAttribute = this.sparklesGeometry.getAttribute('position') as THREE.BufferAttribute;
    if (this.dolphinMesh.skeleton) {
      this.dolphinMesh.skeleton.update();
    }
    this.dolphinMesh.updateMatrixWorld(true);

    const posAttr = this.dolphinMesh.geometry.getAttribute('position');
    const basePos = this._tmpBasePos;
    const skinned = this._tmpSkinned;
    const localOut = this._tmpLocalOut;
    const normalV = this._tmpNormal;

    const currentPositions: THREE.Vector3[] = [];

    for (let i = 0; i < this.sparkleCount; i++) {
      const data = this.sampledData[i];
      if (!data) continue;

      basePos.fromBufferAttribute(posAttr, data.vertexIndex);
      if (data.normal) {
        normalV.copy(data.normal).normalize();
        localOut.copy(basePos).addScaledVector(normalV, this.outset);
      } else {
        localOut.copy(basePos).add(data.offset);
      }

      if (typeof this.dolphinMesh.applyBoneTransform === 'function') {
        skinned.copy(localOut);
        this.dolphinMesh.applyBoneTransform(data.vertexIndex, skinned);
        skinned.applyMatrix4(this.dolphinMesh.matrixWorld);
      } else {
        skinned.copy(localOut).applyMatrix4(this.dolphinMesh.matrixWorld);
      }

      positionAttribute.array[i * 3] = skinned.x;
      positionAttribute.array[i * 3 + 1] = skinned.y;
      positionAttribute.array[i * 3 + 2] = skinned.z;

      currentPositions.push(skinned.clone());
    }

    positionAttribute.needsUpdate = true;
    this.updateConnectionLines(currentPositions);
  }

  private updateConnectionLines(positions: THREE.Vector3[]) {
    if (!this.linePositions || !this.lineColors || !this.linesGeometry || !this.sparklesMaterial) return;

    let lineIndex = 0;
    const color1 = this.sparklesMaterial.uniforms.uColor1.value;
    const color2 = this.sparklesMaterial.uniforms.uColor2.value;
    const maxLineCount = this.linePositions.length / 6;
    const connectionDistSq = this.connectionDistance * this.connectionDistance;
    const gridSize = this.connectionDistance * 2;
    const grid = new Map<string, Array<{ index: number; position: THREE.Vector3 }>>();

    for (let i = 0; i < positions.length; i++) {
      const pos = positions[i];
      const cellX = Math.floor(pos.x / gridSize);
      const cellY = Math.floor(pos.y / gridSize);
      const cellZ = Math.floor(pos.z / gridSize);
      const cellKey = `${cellX},${cellY},${cellZ}`;

      let cell = grid.get(cellKey);
      if (!cell) {
        cell = [];
        grid.set(cellKey, cell);
      }
      cell.push({ index: i, position: pos });
    }

    for (let i = 0; i < positions.length; i++) {
      const pos = positions[i];
      const cellX = Math.floor(pos.x / gridSize);
      const cellY = Math.floor(pos.y / gridSize);
      const cellZ = Math.floor(pos.z / gridSize);

      let broken = false;
      for (let dx = -1; dx <= 1 && !broken; dx++) {
        for (let dy = -1; dy <= 1 && !broken; dy++) {
          for (let dz = -1; dz <= 1 && !broken; dz++) {
            const neighborKey = `${cellX + dx},${cellY + dy},${cellZ + dz}`;
            const neighbors = grid.get(neighborKey);
            if (!neighbors) continue;

            for (const neighbor of neighbors) {
              const j = neighbor.index;
              if (j <= i) continue;

              const distSq = pos.distanceToSquared(neighbor.position);
              if (distSq < connectionDistSq) {
                const alpha = 1.0 - Math.sqrt(distSq) / this.connectionDistance;
                const idx6 = lineIndex * 6;

                this.linePositions[idx6] = pos.x;
                this.linePositions[idx6 + 1] = pos.y;
                this.linePositions[idx6 + 2] = pos.z;
                this.linePositions[idx6 + 3] = neighbor.position.x;
                this.linePositions[idx6 + 4] = neighbor.position.y;
                this.linePositions[idx6 + 5] = neighbor.position.z;

                const mixedColor = color1.clone().lerp(color2, this.sampledData[i].random);

                this.lineColors[idx6] = mixedColor.r * alpha;
                this.lineColors[idx6 + 1] = mixedColor.g * alpha;
                this.lineColors[idx6 + 2] = mixedColor.b * alpha;
                this.lineColors[idx6 + 3] = mixedColor.r * alpha;
                this.lineColors[idx6 + 4] = mixedColor.g * alpha;
                this.lineColors[idx6 + 5] = mixedColor.b * alpha;

                lineIndex++;
                if (lineIndex >= maxLineCount) {
                  broken = true;
                  break;
                }
              }
            }
          }
        }
      }
      if (lineIndex >= maxLineCount) break;
    }

    this.linesGeometry.attributes.position.needsUpdate = true;
    this.linesGeometry.attributes.color.needsUpdate = true;
    this.linesGeometry.setDrawRange(0, lineIndex * 2);
  }

  public update(delta: number, elapsed: number) {
    if (this.mixer) {
      this.mixer.update(delta);
    }
    if (this.material) {
      this.material.uniforms.uTime.value = elapsed;
    }
    if (this.sparklesMaterial) {
      this.sparklesMaterial.uniforms.uTime.value = elapsed;
    }
    if (this.dolphinMesh && this.sparkles) {
      this.updateSparklePositions();
    }
  }

  public dispose() {
    if (this.mixer) {
      this.mixer.stopAllAction();
      this.mixer = null;
    }
    this.material?.dispose();
    this.sparklesMaterial?.dispose();
    this.sparklesGeometry?.dispose();
    this.linesMaterial?.dispose();
    this.linesGeometry?.dispose();

    if (this.dolphinScene) {
      this.group.remove(this.dolphinScene);
    }
    this.scene.remove(this.group);
  }
}
