import { useEffect } from "react";

/**
 * UnicornBackground Component
 *
 * Mounts Unicorn Studio animation once and never re-renders.
 * Lives outside React's lifecycle - just provides a DOM mount point.
 *
 * Architecture:
 * - Fixed position (behind all content)
 * - z-index: -10 (never blocks interactions)
 * - Gradient mask (fades at edges)
 * - Loads script once, initializes once
 */
export default function UnicornBackground() {
  useEffect(() => {
    // Only load script if not already present
    if (!window.UnicornStudio) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;

      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };

      script.onerror = () => {
        console.warn(
          "Unicorn Studio failed to load - using fallback background",
        );
      };

      document.body.appendChild(script);
    }

    // No cleanup - script stays loaded for performance
  }, []); // Empty deps = run once only

  // Check for reduced motion preference (accessibility)
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // If user prefers reduced motion, show static gradient instead
  if (prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #1a1a2e 100%)",
        }}
      />
    );
  }

  return (
    <div
      className="unicorn-background-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -10,
        pointerEvents: "none", // Never block clicks
        maskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    >
      {/* Unicorn Studio mounts here */}
      <div
        data-us-project="ILgOO23w4wEyPQOKyLO4"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
}
