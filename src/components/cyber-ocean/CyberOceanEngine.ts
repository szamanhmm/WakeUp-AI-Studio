import * as THREE from 'three';
import { Wormhole } from './Wormhole';
import { FlowField } from './FlowField';
import { Seabed } from './Seabed';
import { Dolphin } from './Dolphin';
import { CyberPostProcessing } from './PostProcessing';

export interface CyberOceanStats {
  fps: number;
  depth: number;
  speed: number;
  particles: number;
  dolphinLoaded: boolean;
}

export class CyberOceanEngine {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private postProcessing: CyberPostProcessing | null = null;

  private wormhole: Wormhole | null = null;
  private flowField: FlowField | null = null;
  private seabed: Seabed | null = null;
  private dolphin: Dolphin | null = null;

  private clock: THREE.Clock;
  private animationFrameId: number | null = null;
  private isDestroyed = false;

  // Mouse & Parallax
  public mouse = {
    target: new THREE.Vector2(0, 0),
    current: new THREE.Vector2(0, 0),
    speed: new THREE.Vector2(0, 0),
    last: new THREE.Vector2(0, 0),
    isDown: false,
    dragStart: new THREE.Vector2(0, 0),
    rotationOffset: new THREE.Vector2(0, 0),
  };

  // Base camera coords from Cyber-Ocean
  private baseCameraPos = new THREE.Vector3(4.0, 0.8, 3.4);
  private cameraLookTarget = new THREE.Vector3(0, 0, 0);

  // Performance telemetry
  private lastTime = 0;
  private frameCount = 0;
  private currentFps = 60;
  private onStatsCallback?: (stats: CyberOceanStats) => void;

  constructor(
    private canvas: HTMLCanvasElement,
    options?: {
      onStats?: (stats: CyberOceanStats) => void;
    }
  ) {
    this.onStatsCallback = options?.onStats;
    this.clock = new THREE.Clock();

    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x010314);
    this.scene.fog = new THREE.Fog(0x010314, 40, 180);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    this.camera.position.copy(this.baseCameraPos);
    this.camera.lookAt(this.cameraLookTarget);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    // 4. Lighting & Environment
    this.setupLighting();
    this.loadEnvironment();

    // 5. World Components
    this.wormhole = new Wormhole(this.scene);
    this.flowField = new FlowField(this.scene);
    this.seabed = new Seabed(this.scene);
    this.dolphin = new Dolphin(this.scene, () => {
      const w = this.canvas.clientWidth || window.innerWidth;
      const h = this.canvas.clientHeight || window.innerHeight;
      this.resize(w, h);
    });

    // Apply responsive camera and dolphin sizing immediately for current viewport
    this.resize(width, height);

    // 6. Post-Processing
    try {
      this.postProcessing = new CyberPostProcessing(
        this.renderer,
        this.scene,
        this.camera,
        width,
        height
      );
    } catch (e) {
      console.warn('Post-processing initialization skipped, falling back to direct render:', e);
      this.postProcessing = null;
    }

    // 7. Event Listeners
    this.setupEvents();

    // 8. Start Render Loop
    this.lastTime = performance.now();
    this.tick = this.tick.bind(this);
    this.animationFrameId = requestAnimationFrame(this.tick);
  }

  private setupLighting() {
    // Key directional light (cyan-tinted)
    const keyLight = new THREE.DirectionalLight(0x6fd3fb, 3.2);
    keyLight.position.set(2, 4, -2);
    this.scene.add(keyLight);

    // Fill light (deep ocean azure)
    const fillLight = new THREE.DirectionalLight(0x0077b6, 1.8);
    fillLight.position.set(-2, 1, 2);
    this.scene.add(fillLight);

    // Rim back light (high energy cyber cyan)
    const rimLight = new THREE.DirectionalLight(0x00f5d4, 2.5);
    rimLight.position.set(0, -2, -3);
    this.scene.add(rimLight);

    // Ambient oceanic glow
    const ambientLight = new THREE.AmbientLight(0x051329, 2.0);
    this.scene.add(ambientLight);
  }

  private loadEnvironment() {
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath('/assets/textures/environmentMap/');
    cubeTextureLoader.load(
      ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
      (cubeMap) => {
        if (!this.isDestroyed) {
          cubeMap.colorSpace = THREE.SRGBColorSpace;
          this.scene.environment = cubeMap;
        }
      },
      undefined,
      (err) => {
        console.warn('CubeMap load note:', err);
      }
    );
  }

  private setupEvents() {
    const handlePointerMove = (e: MouseEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      this.mouse.target.set(
        Math.max(-1, Math.min(1, x)),
        Math.max(-1, Math.min(1, y))
      );

      if (this.mouse.isDown) {
        const deltaX = (e.clientX - this.mouse.dragStart.x) * 0.003;
        const deltaY = (e.clientY - this.mouse.dragStart.y) * 0.003;
        this.mouse.rotationOffset.x += deltaX;
        this.mouse.rotationOffset.y = Math.max(-0.4, Math.min(0.4, this.mouse.rotationOffset.y + deltaY));
        this.mouse.dragStart.set(e.clientX, e.clientY);
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      this.mouse.isDown = true;
      this.mouse.dragStart.set(e.clientX, e.clientY);
    };

    const handlePointerUp = () => {
      this.mouse.isDown = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        this.mouse.target.set(
          Math.max(-1, Math.min(1, x)),
          Math.max(-1, Math.min(1, y))
        );
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    (this as any)._cleanupEvents = () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }

  public resize(width: number, height: number) {
    if (this.isDestroyed || !width || !height) return;

    const aspect = width / height;
    this.camera.aspect = aspect;

    // Viewport-adaptive dolphin scaling & framing
    // In mobile portrait view (aspect < 0.85 or phones), we position the dolphin in the TOP MIDDLE
    // of the hero section so its entire face, rostrum, eyes, and swimming form are prominently
    // visible at the top, rather than getting pushed down to the bottom of the section.
    if (aspect < 0.85) {
      // Mobile portrait (phones) - Top Middle placement
      this.camera.fov = 44;
      this.baseCameraPos.set(3.2, 0.85, 3.6);
      this.cameraLookTarget.set(0, -0.42, 0);
      if (this.dolphin) {
        this.dolphin.setScale(0.42);
        this.dolphin.setPosition(0, 0.72, 0);
      }
    } else if (aspect < 1.2) {
      // Tablets / square viewports
      this.camera.fov = 38;
      this.baseCameraPos.set(3.8, 0.75, 3.5);
      this.cameraLookTarget.set(0, -0.15, 0);
      if (this.dolphin) {
        this.dolphin.setScale(0.52);
        this.dolphin.setPosition(0, 0.28, 0);
      }
    } else {
      // Desktop / widescreen
      this.camera.fov = 35;
      this.baseCameraPos.set(4.0, 0.7, 3.4);
      this.cameraLookTarget.set(0, 0, 0);
      if (this.dolphin) {
        this.dolphin.setScale(0.65);
        this.dolphin.setPosition(0, 0.05, 0);
      }
    }

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    if (this.postProcessing) {
      this.postProcessing.resize(width, height);
    }
  }

  private tick() {
    if (this.isDestroyed) return;

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const elapsed = this.clock.getElapsedTime();

    // 1. Mouse interpolation & velocity
    const lerpFactor = 0.08;
    this.mouse.current.x += (this.mouse.target.x - this.mouse.current.x) * lerpFactor;
    this.mouse.current.y += (this.mouse.target.y - this.mouse.current.y) * lerpFactor;

    this.mouse.speed.x = (this.mouse.current.x - this.mouse.last.x) / (delta || 0.016);
    this.mouse.speed.y = (this.mouse.current.y - this.mouse.last.y) / (delta || 0.016);
    this.mouse.last.copy(this.mouse.current);

    // 2. Camera Harmonic Floating Drift + Parallax
    const floatX = Math.sin(elapsed * 0.4) * 0.35 + this.mouse.current.x * 0.85;
    const floatY = Math.cos(elapsed * 0.5) * 0.25 + this.mouse.current.y * 0.55;
    const floatZ = Math.sin(elapsed * 0.3) * 0.2;

    const rotX = this.mouse.rotationOffset.x;
    const rotY = this.mouse.rotationOffset.y;

    this.camera.position.x = this.baseCameraPos.x + floatX + Math.sin(rotX) * 1.5;
    this.camera.position.y = this.baseCameraPos.y + floatY + rotY * 1.5;
    this.camera.position.z = this.baseCameraPos.z + floatZ;

    this.camera.lookAt(
      this.cameraLookTarget.x + this.mouse.current.x * 0.4,
      this.cameraLookTarget.y + this.mouse.current.y * 0.3,
      this.cameraLookTarget.z
    );

    // 3. Update Scene Components
    if (this.wormhole) this.wormhole.update(delta, elapsed);
    if (this.flowField) this.flowField.update(delta, elapsed);
    if (this.seabed) this.seabed.update(delta, elapsed);
    if (this.dolphin) this.dolphin.update(delta, elapsed);

    // 4. Render (via PostProcessing or Direct Renderer)
    if (this.postProcessing) {
      this.postProcessing.update(elapsed, this.mouse.speed);
      this.postProcessing.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    // 5. Telemetry & FPS stats
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastTime >= 500) {
      this.currentFps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;

      if (this.onStatsCallback) {
        this.onStatsCallback({
          fps: this.currentFps,
          depth: 1420 + Math.floor(Math.sin(elapsed * 0.2) * 80),
          speed: 28.4 + Math.sin(elapsed * 0.5) * 2.2,
          particles: 42400,
          dolphinLoaded: this.dolphin ? this.dolphin.isLoaded : false,
        });
      }
    }

    this.animationFrameId = requestAnimationFrame(this.tick);
  }

  public dispose() {
    this.isDestroyed = true;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    if ((this as any)._cleanupEvents) {
      (this as any)._cleanupEvents();
    }

    this.wormhole?.dispose();
    this.flowField?.dispose();
    this.seabed?.dispose();
    this.dolphin?.dispose();
    this.postProcessing?.dispose();
    this.renderer.dispose();
  }
}
