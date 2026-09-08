import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {
  postProcessingVertexShader,
  postProcessingFragmentShader,
} from './shaders';

export class CyberPostProcessing {
  public composer: EffectComposer;
  private shaderPass: ShaderPass;

  constructor(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    width: number,
    height: number
  ) {
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
    });

    this.composer = new EffectComposer(renderer, renderTarget);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.composer.setSize(width, height);

    const renderPass = new RenderPass(scene, camera);
    this.composer.addPass(renderPass);

    const combinedShader = {
      uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0 },
        uGlowIntensity: { value: 0.35 },
        uAberration: { value: 0.0035 },
        uMouseInfluence: { value: new THREE.Vector2(0, 0) },
        uGrainIntensity: { value: 0.03 },
        uVignetteStrength: { value: 0.45 },
      },
      vertexShader: postProcessingVertexShader,
      fragmentShader: postProcessingFragmentShader,
    };

    this.shaderPass = new ShaderPass(combinedShader);
    this.composer.addPass(this.shaderPass);
  }

  public resize(width: number, height: number) {
    this.composer.setSize(width, height);
  }

  public update(elapsed: number, mouseInfluence: THREE.Vector2) {
    if (this.shaderPass.uniforms.uTime) {
      this.shaderPass.uniforms.uTime.value = elapsed;
    }
    if (this.shaderPass.uniforms.uMouseInfluence) {
      this.shaderPass.uniforms.uMouseInfluence.value.copy(mouseInfluence);
    }
  }

  public render() {
    this.composer.render();
  }

  public dispose() {
    this.composer.renderTarget1.dispose();
    this.composer.renderTarget2.dispose();
  }
}
