// components/common/Particles.js
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const GlobalParticles = ({ className }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={className}
      options={{
        // no opaque canvas background → let the page bg show through
        background: { color: { value: 'transparent' } },
        // disable the auto fullScreen so our fixed inset-0 sizing works
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick:  { enable: true, mode: 'push' },
            onHover:  { enable: true, mode: 'repulse' },
            resize:   true,
          },
          modes: {
            push:    { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ['#E65C92', '#D0487E', '#F8F8F8', '#9B59B6'] },
          links: {
            color: '#E65C92',
            distance: 150,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.6 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default GlobalParticles;
