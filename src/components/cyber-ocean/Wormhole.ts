import * as THREE from 'three';
import { wormholeVertexShader, wormholeFragmentShader } from './shaders';

interface SpeedLine {
  mesh: THREE.Mesh;
  speed: number;
  baseOpacity: number;
  initialRadius: number;
  angle: number;
}

export class Wormhole {
  public group: THREE.Group;
  private tubeMesh: THREE.Mesh | null = null;
  private tubeMaterial: THREE.ShaderMaterial | null = null;
  private tubeGeometry: THREE.TubeGeometry | null = null;
  private speedLines: SpeedLine[] = [];
  private speedLinesGroup: THREE.Group;

  private config = {
    speedLineCount: 200,
    lineSpeed: 12,
    innerRadius: 20,
    outerRadius: 42,
    startZ: 100,
    endZ: -100,
    speedLineColors: [
      new THREE.Color(0x00f5d4), // cyan
      new THREE.Color(0x00a1ff), // azure blue
      new THREE.Color(0x7000ff), // cyber purple
      new THREE.Color(0x91cdff), // bright ice
    ],
    tubeRadius: 50,
    tubeSegments: 70,
    tubeRadialSegments: 30,
    tubeLength: 1000,
    curvePoints: 5,
  };

  constructor(private scene: THREE.Scene) {
    this.group = new THREE.Group();
    this.speedLinesGroup = new THREE.Group();
    this.group.add(this.speedLinesGroup);
    this.scene.add(this.group);

    this.createTube();
    this.createSpeedLines();
  }

  private createTube() {
    const halfLength = this.config.tubeLength / 2;
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i < this.config.curvePoints; i++) {
      const t = i / (this.config.curvePoints - 1);
      const z = halfLength - this.config.tubeLength * t;
      curvePoints.push(new THREE.Vector3(0, 0, z));
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints);
    this.tubeGeometry = new THREE.TubeGeometry(
      curve,
      this.config.tubeSegments,
      this.config.tubeRadius,
      this.config.tubeRadialSegments,
      false
    );

    const positions = this.tubeGeometry.attributes.position.array as Float32Array;
    const verticesPerSegment = this.config.tubeRadialSegments + 1;

    for (let i = 0; i < this.config.tubeSegments + 1; i++) {
      const u = i / this.config.tubeSegments;
      const radiusScale = 1 - u * 0.8;
      for (let j = 0; j < verticesPerSegment; j++) {
        const index = (i * verticesPerSegment + j) * 3;
        const centerPoint = curve.getPointAt(Math.min(u, 1));
        const x = positions[index];
        const y = positions[index + 1];
        const offsetX = x - centerPoint.x;
        const offsetY = y - centerPoint.y;
        positions[index] = centerPoint.x + offsetX * radiusScale;
        positions[index + 1] = centerPoint.y + offsetY * radiusScale;
      }
    }

    this.tubeGeometry.attributes.position.needsUpdate = true;
    this.tubeGeometry.computeVertexNormals();

    this.tubeMaterial = new THREE.ShaderMaterial({
      vertexShader: wormholeVertexShader,
      fragmentShader: wormholeFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(0x000d24) },
        uColor2: { value: new THREE.Color(0x004c8c) },
        uColor3: { value: new THREE.Color(0x00f5d4) },
        fogColor: {
          value: this.scene.fog ? this.scene.fog.color : new THREE.Color(0x010314),
        },
        fogNear: { value: this.scene.fog ? (this.scene.fog as THREE.Fog).near : 40 },
        fogFar: { value: this.scene.fog ? (this.scene.fog as THREE.Fog).far : 180 },
      },
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });

    this.tubeMesh = new THREE.Mesh(this.tubeGeometry, this.tubeMaterial);
    this.group.add(this.tubeMesh);
  }

  private createSpeedLines() {
    const geometries = new Map<string, THREE.BoxGeometry>();
    const materials = new Map<number, THREE.MeshBasicMaterial>();

    for (let i = 0; i < this.config.speedLineCount; i++) {
      const color = this.config.speedLineColors[
        Math.floor(Math.random() * this.config.speedLineColors.length)
      ];
      const length = 2.5 + Math.random() * 7.0;
      const thickness = 0.05 + Math.random() * 0.12;

      const geoKey = `${length.toFixed(2)}_${thickness.toFixed(3)}`;
      let geometry = geometries.get(geoKey);
      if (!geometry) {
        geometry = new THREE.BoxGeometry(thickness, thickness, length);
        geometries.set(geoKey, geometry);
      }

      const matKey = color.getHex();
      let material = materials.get(matKey);
      if (!material) {
        material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.85,
        });
        materials.set(matKey, material);
      }

      const mesh = new THREE.Mesh(geometry, material);
      const angle = Math.random() * Math.PI * 2;
      const radius =
        this.config.innerRadius +
        Math.random() * (this.config.outerRadius - this.config.innerRadius);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z =
        this.config.startZ +
        Math.random() * (this.config.endZ - this.config.startZ);

      mesh.position.set(x, y, z);
      this.speedLinesGroup.add(mesh);

      this.speedLines.push({
        mesh,
        speed: this.config.lineSpeed * (0.6 + Math.random() * 0.8),
        baseOpacity: 0.4 + Math.random() * 0.6,
        initialRadius: radius,
        angle,
      });
    }
  }

  public update(delta: number, elapsed: number) {
    if (this.tubeMaterial) {
      this.tubeMaterial.uniforms.uTime.value = elapsed;
      if (this.scene.fog) {
        this.tubeMaterial.uniforms.fogColor.value.copy(this.scene.fog.color);
      }
    }

    const startZ = this.config.startZ;
    const endZ = this.config.endZ;
    const zRange = startZ - endZ;

    for (let i = 0; i < this.speedLines.length; i++) {
      const line = this.speedLines[i];
      line.mesh.position.z += line.speed * delta;

      if (line.mesh.position.z > startZ) {
        line.mesh.position.z = endZ;
        line.angle = Math.random() * Math.PI * 2;
      }

      const normalizedZ = (line.mesh.position.z - endZ) / zRange;
      const currentRadius = line.initialRadius * (0.85 + normalizedZ * 0.35);

      line.mesh.position.x = Math.cos(line.angle) * currentRadius;
      line.mesh.position.y = Math.sin(line.angle) * currentRadius;

      let opacity = 1;
      if (normalizedZ > 0.85) {
        opacity = (1 - normalizedZ) * 6.6;
      } else if (normalizedZ < 0.15) {
        opacity = normalizedZ * 6.6;
      }

      (line.mesh.material as THREE.MeshBasicMaterial).opacity =
        opacity * line.baseOpacity;

      const scaleVal = 0.4 + normalizedZ * 0.8;
      line.mesh.scale.set(scaleVal, scaleVal, 1);
    }
  }

  public dispose() {
    if (this.tubeMesh && this.tubeGeometry && this.tubeMaterial) {
      this.group.remove(this.tubeMesh);
      this.tubeGeometry.dispose();
      this.tubeMaterial.dispose();
    }

    for (const line of this.speedLines) {
      this.speedLinesGroup.remove(line.mesh);
    }
    this.speedLines = [];
    this.scene.remove(this.group);
  }
}
