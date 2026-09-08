import { useEffect, useRef, useState } from 'react';
import { CyberOceanEngine, CyberOceanStats } from './cyber-ocean/CyberOceanEngine';
import { Activity, Waves, Gauge, Eye, RotateCcw } from 'lucide-react';

export default function CyberOceanCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<CyberOceanEngine | null>(null);

  const [stats, setStats] = useState<CyberOceanStats>({
    fps: 60,
    depth: 1420,
    speed: 28.4,
    particles: 42400,
    dolphinLoaded: false,
  });

  const [hudVisible, setHudVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Initialize the Three.js Cyber-Ocean engine
    let engine: CyberOceanEngine | null = null;
    try {
      engine = new CyberOceanEngine(canvas, {
        onStats: (newStats) => {
          setStats((prev) => ({ ...prev, ...newStats }));
        },
      });
      engineRef.current = engine;
    } catch (err) {
      console.error('Failed to initialize Cyber-Ocean WebGL engine:', err);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (engine && width > 0 && height > 0) {
          engine.resize(width, height);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (engine) {
        engine.dispose();
        engineRef.current = null;
      }
    };
  }, []);

  const handleResetCamera = () => {
    if (engineRef.current) {
      engineRef.current.mouse.rotationOffset.set(0, 0);
      engineRef.current.mouse.target.set(0, 0);
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
      style={{ zIndex: 1 }}
    >
      {/* 3D WebGL Cyber-Ocean Canvas */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Atmospheric Oceanic Vignette & Gradient Fades for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/75 via-transparent to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#010314_100%)] pointer-events-none opacity-80" />

      {/* Cyber-Ocean Live Telemetry HUD */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex flex-col items-end gap-2 pointer-events-auto">
        {hudVisible ? (
          <div className="bg-slate-950/80 border border-cyan-500/30 rounded-xl p-3.5 backdrop-blur-md shadow-[0_0_25px_rgba(0,245,212,0.12)] text-xs font-mono text-cyan-300 w-64 transition-all duration-300">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2.5">
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-cyan-200">
                <Waves className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>CYBER-OCEAN ENGINE</span>
              </div>
              <button
                onClick={() => setHudVisible(false)}
                className="text-slate-400 hover:text-cyan-300 p-0.5 rounded transition-colors"
                title="Minimize HUD"
              >
                <Eye className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1 text-slate-400">
                  <Activity className="w-3 h-3 text-cyan-400" /> Frame Rate:
                </span>
                <span className="font-semibold text-cyan-300">{stats.fps} FPS</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1 text-slate-400">
                  <Gauge className="w-3 h-3 text-blue-400" /> Abyssal Depth:
                </span>
                <span className="text-blue-300">{stats.depth}m</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1 text-slate-400">
                  <Waves className="w-3 h-3 text-emerald-400" /> Active Particles:
                </span>
                <span className="text-emerald-300">42,400 pts</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Cyber Mesh:</span>
                <span className="inline-flex items-center gap-1 text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>Dolphin Constellation</span>
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-cyan-500/20 flex items-center justify-between">
              <span className="text-[10px] text-slate-500">Drag to rotate • Move to dive</span>
              <button
                onClick={handleResetCamera}
                className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                title="Reset Camera Angle"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setHudVisible(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-lg hover:bg-slate-900 transition-colors"
          >
            <Waves className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cyber-Ocean Telemetry</span>
          </button>
        )}
      </div>
    </div>
  );
}
