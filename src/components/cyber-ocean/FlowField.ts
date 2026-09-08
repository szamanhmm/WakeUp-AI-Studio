import * as THREE from 'three';
import { flowFieldVertexShader, flowFieldFragmentShader } from './shaders';

interface FlowParticle {
  offset: number;
  speed: number;
  swirl: number;
}

export class FlowField {
  public points: THREE.Points | null = null;
  private geometry: THREE.BufferGeometry | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private particles: FlowParticle[] = [];

  private config = {
    particleCount: 1500,
    bounds: {
      x: 80,
      y: 50,
      z: 100,
    },
    flowSpeed: 0.8,
    noiseScale: 0.08,
    turbulence: 0.3,
  };

  constructor(private scene: THREE.Scene) {
    this.createParticles();
  }

  private noise3D(x: number, y: number, z: number): number {
    const n1 = Math.sin(x * 1.5 + z * 0.8) * Math.cos(y * 1.2 + x * 0.5);
    const n2 = Math.sin(y * 1.8 + x * 0.6) * Math.cos(z * 1.4 + y * 0.7);
    const n3 = Math.sin(z * 2.1 + y * 0.9) * Math.cos(x * 1.6 + z * 0.4);
    const detail =
      Math.sin(x * 4.0) * Math.cos(y * 4.0) * Math.sin(z * 4.0) * 0.3;
    return (n1 + n2 + n3) / 3 + detail;
  }

  private getFlowVector(
    x: number,
    y: number,
    z: number,
    time: number,
    particle: FlowParticle
  ): { x: number; y: number; z: number } {
    const scale = this.config.noiseScale;
    const t = time * 0.3;
    const scale2 = scale * 2;
    const t15 = t * 1.5;

    const sx = x * scale;
    const sy = y * scale;
    const sz = z * scale;

    const nx1 = this.noise3D(sx + t, sy, sz);
    const ny1 = this.noise3D(sx, sy + t, sz + 1000);
    const nz1 = this.noise3D(sx, sy, sz + t + 2000);

    const nx2 = this.noise3D(sx * scale2 + t15, sy * scale2, sz * scale2) * 0.5;
    const ny2 = this.noise3D(sx * scale2, sy * scale2 + t15, sz * scale2 + 1000) * 0.5;
    const nz2 = this.noise3D(sx * scale2, sy * scale2, sz * scale2 + t15 + 2000) * 0.5;

    const nx = nx1 + nx2;
    const ny = ny1 + ny2;
    const nz = nz1 + nz2;

    const angle1 = nx * Math.PI * 2;
    const angle2 = ny * Math.PI;

    const cosAngle1 = Math.cos(angle1);
    const cosAngle2 = Math.cos(angle2);
    const sinAngle1 = Math.sin(angle1);
    const sinAngle2 = Math.sin(angle2);

    const swirl = particle.swirl + time * 0.5;
    const swirlX = Math.cos(swirl) * this.config.turbulence;
    const swirlY = Math.sin(swirl) * this.config.turbulence;

    return {
      x: cosAngle1 * cosAngle2 + swirlX,
      y: sinAngle2 + swirlY,
      z: sinAngle1 * cosAngle2 + nz * 0.3,
    };
  }

  private createParticles() {
    const count = this.config.particleCount;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);
    const particleTypes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * this.config.bounds.x;
      positions[i3 + 1] = (Math.random() - 0.5) * this.config.bounds.y;
      positions[i3 + 2] = (Math.random() - 0.5) * this.config.bounds.z;

      velocities[i3] = 0;
      velocities[i3 + 1] = 0;
      velocities[i3 + 2] = 0;

      particleTypes[i] = Math.random();
      sizes[i] = Math.random() < 0.7 ? 1.2 + Math.random() * 2.0 : 3.5 + Math.random() * 3.0;
      alphas[i] = 0.35 + Math.random() * 0.55;

      this.particles.push({
        offset: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 0.8,
        swirl: Math.random() * Math.PI * 2,
      });
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    this.geometry.setAttribute('particleType', new THREE.BufferAttribute(particleTypes, 1));

    this.material = new THREE.ShaderMaterial({
      vertexShader: flowFieldVertexShader,
      fragmentShader: flowFieldFragmentShader,
      uniforms: {
        uColor: { value: new THREE.Color(0x00f5d4) }, // vibrant cyan bioluminescence
        uTime: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);
  }

  public update(delta: number, elapsed: number) {
    if (!this.geometry || !this.material) return;

    this.material.uniforms.uTime.value = elapsed;

    const positions = this.geometry.attributes.position.array as Float32Array;
    const velocities = this.geometry.attributes.velocity.array as Float32Array;

    const halfX = this.config.bounds.x / 2;
    const halfY = this.config.bounds.y / 2;
    const halfZ = this.config.bounds.z / 2;
    const margin = 5;

    const minX = -halfX - margin;
    const maxX = halfX + margin;
    const minY = -halfY - margin;
    const maxY = halfY + margin;
    const minZ = -halfZ - margin;
    const maxZ = halfZ + margin;

    const velDamp = 0.95;
    const velBlend = 0.05;
    const flowSpeed = this.config.flowSpeed;

    for (let i = 0; i < this.config.particleCount; i++) {
      const i3 = i * 3;
      const particle = this.particles[i];
      let px = positions[i3];
      let py = positions[i3 + 1];
      let pz = positions[i3 + 2];

      const flow = this.getFlowVector(px, py, pz, elapsed + particle.offset, particle);
      flow.y += 0.3;
      flow.z += 0.2;

      const speedDelta = flowSpeed * particle.speed * delta;
      velocities[i3] = velocities[i3] * velDamp + flow.x * velBlend;
      velocities[i3 + 1] = velocities[i3 + 1] * velDamp + flow.y * velBlend;
      velocities[i3 + 2] = velocities[i3 + 2] * velDamp + flow.z * velBlend;

      px += velocities[i3] * speedDelta;
      py += velocities[i3 + 1] * speedDelta;
      pz += velocities[i3 + 2] * speedDelta;

      // Wrap around bounds
      if (px < minX) px = maxX;
      else if (px > maxX) px = minX;
      if (py < minY) py = maxY;
      else if (py > maxY) py = minY;
      if (pz < minZ) pz = maxZ;
      else if (pz > maxZ) pz = minZ;

      positions[i3] = px;
      positions[i3 + 1] = py;
      positions[i3 + 2] = pz;
    }

    this.geometry.attributes.position.needsUpdate = true;
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
