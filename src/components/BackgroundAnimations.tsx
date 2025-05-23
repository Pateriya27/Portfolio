"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  type?: 'particles' | 'grid' | 'dots' | 'waves' | 'nebula' | 'matrix' | 'stars' | 'fluid' | 'geometric' | 'network' | 'fireflies' | 'constellation';
  count?: number;
  opacity?: number;
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
  interactive?: boolean;
  density?: 'low' | 'medium' | 'high';
  colorMode?: 'mono' | 'duo' | 'rainbow';
}

interface BackgroundAnimationsProps {
  type: 'nebula' | 'waves' | 'particles' | 'stars';
  opacity?: number;
  count?: number;
  speed?: 'slow' | 'medium' | 'fast';
  interactive?: boolean;
}

// Stable positions for particles and stars
const getStablePositions = (count: number) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    // Use a deterministic way to generate positions
    const x = ((i * 7) % 100) + (i * 0.1);
    const y = ((i * 13) % 100) + (i * 0.1);
    positions.push({ x, y });
  }
  return positions;
};

export const BackgroundAnimations: React.FC<BackgroundAnimationsProps> = ({
  type,
  opacity = 0.5,
  count = 20,
  speed = 'medium',
  interactive = false,
}) => {
  const speedMap = {
    slow: 20,
    medium: 15,
    fast: 10,
  };

  const duration = speedMap[speed];
  
  // Generate stable positions once
  const positions = useMemo(() => getStablePositions(count), [count]);

  const renderAnimation = () => {
    switch (type) {
      case 'nebula':
    return (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
      </div>
    );

      case 'waves':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                style={{
                  top: `${i * 33}%`,
                  height: '2px',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: duration * (i + 1),
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
              />
            ))}
          </div>
        );

      case 'particles':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {positions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: duration + (i % 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        );

      case 'stars':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {positions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: duration + (i % 10),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="pointer-events-none"
      style={{ opacity }}
    >
      {renderAnimation()}
    </div>
  );
};
