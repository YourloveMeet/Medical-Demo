"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "hidden">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 50);

    // Exit after loading
    const exitTimer = setTimeout(() => {
      setPhase("exiting");
      document.body.style.overflow = "";
    }, 1000);

    const hideTimer = setTimeout(() => {
      setPhase("hidden");
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`loader-wrapper ${phase === "exiting" ? "loader-wrapper--exit" : ""}`}
    >
      {/* Background */}
      <div className="loader-bg">
        <div className="loader-bg__orb loader-bg__orb--1" />
        <div className="loader-bg__orb loader-bg__orb--2" />
        <div className="loader-grid-overlay" />
      </div>

      {/* Top HUD */}
      <div className="loader-hud loader-hud--tl">
        <span>System Connect</span>
        <span className="loader-hud__sub">Neural Sync</span>
      </div>
      <div className="loader-hud loader-hud--tr">
        <span>Telemetry</span>
        <span className="loader-hud__sub">Lat: 41.38° N</span>
      </div>

      {/* Center content */}
      <div className={`loader-center ${phase === "exiting" ? "loader-center--exit" : ""}`}>
        {/* Spine wireframe animation */}
        <div className="loader-spine-wire">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="loader-vertebra"
              style={{
                animationDelay: `${i * 0.15}s`,
                transform: `translateY(${i * 18}px)`,
              }}
            />
          ))}
        </div>

        <h1 className="loader-title">PhysioVital</h1>

        {/* Progress bar */}
        <div className="loader-progress">
          <div
            className="loader-progress__bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="loader-status">
          <div className="loader-status__dot" />
          <span>Initializing 3D Environment</span>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="loader-hud loader-hud--bl">
        <div className="loader-status__dot" />
        <span>Phase 01 Active</span>
      </div>
      <div className="loader-hud loader-hud--br">
        SEQ_2026.04
      </div>
    </div>
  );
}
