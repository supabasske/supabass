import React from 'react';
import { motion } from 'framer-motion';

export const HexagonGrid = () => {
  const hexagons = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg className="w-full h-full opacity-20">
        <defs>
          <pattern id="hexagons" width="100" height="87" patternUnits="userSpaceOnUse">
            <polygon
              points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-cyan-500 dark:text-cyan-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className="absolute w-20 h-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: hex.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" className="text-cyan-500">
            <polygon
              points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};