import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const AnimatedCard = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        'rounded-xl border bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-cyan-500/10 transition-shadow p-6',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FlipCard = ({ front, back, className }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className={cn('perspective-1000 h-full cursor-pointer', className)}
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid="flip-card"
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div className="absolute inset-0 backface-hidden">
          {front}
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          {back}
        </div>
      </motion.div>
    </div>
  );
};