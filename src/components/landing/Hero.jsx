import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
          alt="College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.85)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Strategic Admissions Consulting for{' '}
            <span style={{ color: '#C5A059' }}>Ambitious Students</span>
          </h1>

          <p 
            className="text-white/70 text-xl md:text-2xl mb-6 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Empowering Dreams, One Student at a Time
          </p>



          {/* Scarcity Tag */}
          <motion.button
            onClick={scrollToFooter}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full mb-10 cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)', border: '1px solid #C5A059' }}
          >
            <AlertTriangle className="w-5 h-5" style={{ color: '#C5A059' }} />
            <span className="font-semibold text-base" style={{ color: '#C5A059' }}>
              Limited spots available
            </span>
          </motion.button>

          <div>
            <Button
              onClick={scrollToFooter}
              size="lg"
              className="rounded-full px-10 py-7 text-white font-semibold text-lg md:text-xl transition-all hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#3E5C76' }}
            >
              Book Strategy Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}