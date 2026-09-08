import * as THREE from 'three';
import { seabedVertexShader, seabedFragmentShader } from './shaders';

export class Seabed {
  public points: THREE.Points | null = null;
  private geometry: THREE.BufferGeometry | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private scrollOffset = 0;

  private config = {
    gridWidth: 200,
    gridLength: 200,
    width: 260,
    length: 260,
    particleSize: 32.0,
    noiseScale: 0.035,
    noiseHeight: 12.0,
    waveSpeed: 0.5,
    waveAmplitude: 2.2,
    scrollSpeed: 4.0,
    glowIntensity: 1.6,
  };

  constructor(private scene: THREE.Scene) {
    this.createSeabed();
  }

  private createSeabed() {
    const { gridWidth, gridLength, width, length } = this.config;
    const totalParticles = gridWidth * gridLength;

    const positions = new Float32Array(totalParticles * 3);
    const randoms = new Float32Array(totalParticles);
    const gridCoords = new Float32Array(totalParticles * 2);

    const stepX = width / (gridWidth - 1);
    const stepZ = length / (gridLength - 1);
    const halfWidth = width / 2;
    const halfLength = length / 2;

    let index = 0;
    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridLength; j++) {
        const x = i * stepX - halfWidth;
        const z = j * stepZ - halfLength;
        const y = -14.0; // Position below the swim path

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        randoms[index] = Math.random();
        gridCoords[index * 2] = i / gridWidth;
        gridCoords[index * 2 + 1] = j / gridLength;

        index++;
      }
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    this.geometry.setAttribute('aGridCoord', new THREE.BufferAttribute(gridCoords, 2));

    this.material = new THREE.ShaderMaterial({
      vertexShader: seabedVertexShader,
      fragmentShader: seabedFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
        uSize: { value: this.config.particleSize },
        uNoiseScale: { value: this.config.noiseScale },
        uNoiseHeight: { value: this.config.noiseHeight },
        uWaveSpeed: { value: this.config.waveSpeed },
        uWaveAmplitude: { value: this.config.waveAmplitude },
        uScrollSpeed: { value: this.config.scrollSpeed },
        uScrollOffset: { value: 0 },
        uColor1: { value: new THREE.Color(0x010c22) }, // Deep abyssal
        uColor2: { value: new THREE.Color(0x003b6e) }, // Mid ocean
        uColor3: { value: new THREE.Color(0x00f5d4) }, // Cyber cyan peak
        uSandColor: { value: new THREE.Color(0x006680) }, // Sand shelf
        uRockColor: { value: new THREE.Color(0x002244) }, // Ocean rock
        uGlowIntensity: { value: this.config.glowIntensity },
        uFogColor: {
          value: this.scene.fog ? this.scene.fog.color : new THREE.Color(0x010314),
        },
        uFogNear: { value: this.scene.fog ? (this.scene.fog as THREE.Fog).near : 40 },
        uFogFar: { value: this.scene.fog ? (this.scene.fog as THREE.Fog).far : 180 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);
  }

  public update(delta: number, elapsed: number) {
    if (!this.material) return;

    this.scrollOffset += this.config.scrollSpeed * delta;
    this.material.uniforms.uTime.value = elapsed;
    this.material.uniforms.uScrollOffset.value = this.scrollOffset;

    if (this.scene.fog) {
      this.material.uniforms.uFogColor.value.copy(this.scene.fog.color);
    }
  }

  public dispose() {
    if (this.points) {
      this.scene.remove(this.points);
      this.geometry?.dispose();
      this.material?.dispose();
      this.points = null;
    }
  }
}
