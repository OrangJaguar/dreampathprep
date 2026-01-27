import React from 'react';
import { motion } from 'framer-motion';

const universityLogos = [
  { name: 'Harvard', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_logo.svg' },
  { name: 'Duke', url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Duke_University_logo.svg' },
  { name: 'NYU', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_York_University_Logo.svg' },
  { name: 'UPenn', url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/UPenn_logo.svg' },
  { name: 'Stanford', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Stanford_University_Logo.svg' },
  { name: 'MIT', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
  { name: 'Yale', url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Yale_University_logo.svg' },
  { name: 'Princeton', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg' },
  { name: 'Columbia', url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Columbia_University_logo.svg' },
  { name: 'Cornell', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Cornell_University_logo.svg' },
];

export default function LogoTicker() {
  return (
    <section className="py-10 bg-white overflow-hidden border-y" style={{ borderColor: 'rgba(197, 160, 89, 0.2)' }}>
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 md:gap-16 whitespace-nowrap"
        >
          {[...universityLogos, ...universityLogos].map((uni, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center flex-shrink-0 h-12 w-32 grayscale opacity-40"
            >
              <img 
                src={uni.url} 
                alt={uni.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}