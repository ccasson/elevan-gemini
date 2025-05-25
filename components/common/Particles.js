// components/common/Particles.js
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const GlobalParticles = ({ className }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("✅ Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className={className}
      options={{
        fullScreen: false, // Important: we handle size with CSS
        background: { color: { value: "#1E1E2D" } },
        fpsLimit: 120,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ["#E65C92", "#F8F8F8", "#D0487E"] },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          links: {
            enable: true,
            distance: 150,
            color: "#E65C92",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default GlobalParticles;
