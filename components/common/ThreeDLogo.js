// components/common/ThreeDLogo.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { motion } from 'framer-motion-3d'; // Import motion from framer-motion-3d

// Helper component for the 3D text
function Elevan3DText({ initialRotation, initialPosition, scaleFactor, color, glowColor, strokeColor }) {
  const ref = useRef();

  // Animate the text rotation on each frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // Continuous subtle rotation
      ref.current.rotation.x += 0.002;
    }
  });

  return (
    <motion.group
      ref={ref}
      position={initialPosition}
      rotation={initialRotation}
      scale={scaleFactor}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Text
        font="/fonts/Orbitron-Bold.ttf" // You'll need to place Orbitron-Bold.ttf in your public/fonts folder
        fontSize={1.5}
        letterSpacing={-0.05}
        height={0.2} // Extrusion depth
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={16}
        color={color}
      >
        Elevan
        <meshStandardMaterial attach="material" color={color} emissive={glowColor} emissiveIntensity={0.5} />
      </Text>
    </motion.group>
  );
}

const ThreeDLogo = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />

        <Elevan3DText
          initialPosition={[0, 0, 0]}
          initialRotation={[0.1, 0.2, 0]}
          scaleFactor={1}
          color="#E65C92" // brand-accent
          glowColor="#E65C92"
          strokeColor="#ffffff"
        />
      </Canvas>
    </div>
  );
};

export default ThreeDLogo;
