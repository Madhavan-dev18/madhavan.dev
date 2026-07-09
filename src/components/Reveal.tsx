import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

export default function Reveal({ children, delay = 0, y = 18 }: { children: ReactNode; delay?: number; y?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const yOffset = prefersReducedMotion ? 0 : y;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
