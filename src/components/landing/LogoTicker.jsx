import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  'Harvard', 'Duke', 'NYU', 'Imperial College', 'UPenn', 'Georgia Tech', 'Ohio State',
  'Stanford', 'MIT', 'Yale', 'Princeton', 'Columbia', 'Cornell', 'Brown'
];

export default function LogoTicker() {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...universities, ...universities].map((uni, idx) => (
            <div
              key={idx}
              className="text-gray-400 font-semibold text-sm md:text-base tracking-wider uppercase flex-shrink-0"
            >
              {uni}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}