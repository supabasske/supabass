import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const headlines = [
  'Building Tomorrow',
  'Creating Innovation',
  'Crafting Digital Magic',
  'Transforming Ideas',
  'Shaping The Future',
];

export const CyclingHeadline = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 text-5xl md:text-7xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500"
          data-testid="cycling-headline"
        >
          {headlines[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};