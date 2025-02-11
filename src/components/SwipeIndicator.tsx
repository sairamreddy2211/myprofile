import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SwipeIndicator = () => {
  return (
    <motion.div 
      className="flex items-center gap-2 text-cyan-100"
      animate={{ 
        x: [0, 50, 0],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <span className='text-xl'>swipe right</span>
      <ArrowRight className="w-5 h-5" />
    </motion.div>
  );
};

export default SwipeIndicator;