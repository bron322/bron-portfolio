import React, { Suspense, useEffect, useState } from "react";

const CosmicCanvas = React.lazy(() => import("./CosmicCanvas"));

class CosmicErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("CosmicCanvas crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return null; // fail silently – app keeps working
    }
    return this.props.children;
  }
}

const SafeCosmicCanvas = () => {
  const [mode, setMode] = useState(null); // "desktop" | "mobile" | null
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const supportsWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!supportsWebGL()) {
      setEnabled(false);
      setMode(null);
      return;
    }

    const ua = navigator.userAgent || "";
    const isIOS =
      /iPhone|iPad|iPod/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const isSmallScreen = window.innerWidth < 768;

    // iOS or small screens → lighter mode, others → full desktop
    setMode(isIOS || isSmallScreen ? "mobile" : "desktop");
    setEnabled(true);
  }, []);

  if (!enabled || !mode) return null;

  return (
    <CosmicErrorBoundary>
      <Suspense fallback={null}>
        <CosmicCanvas mode={mode} />
      </Suspense>
    </CosmicErrorBoundary>
  );
};

export default SafeCosmicCanvas;
