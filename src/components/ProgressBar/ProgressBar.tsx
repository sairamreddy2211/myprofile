import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <motion.div 
    className="fixed top-0 left-0 right-0 h-1 bg-accent/50 z-50"
    style={{ scaleX: progress }}
  />
);
