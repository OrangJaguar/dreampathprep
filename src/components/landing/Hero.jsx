import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-20" style={{ backgroundColor: '#0A192F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Strategic Admissions Consulting for{' '}
              <span style={{ color: '#C5A059' }}>Ambitious Students</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Guided by a team of PhDs with 20+ years of experience. We turn academic potential into Ivy League acceptances.
            </p>

            {/* Scarcity Tag */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)', border: '1px solid #C5A059' }}
            >
              <AlertTriangle className="w-4 h-4" style={{ color: '#C5A059' }} />
              <span className="font-semibold text-sm" style={{ color: '#C5A059' }}>
                Class of 2026: Only 10 Spots Available
              </span>
            </motion.div>

            <div>
              <Button
                onClick={scrollToFooter}
                size="lg"
                className="rounded-full px-8 py-6 text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#3E5C76' }}
              >
                Secure Your Strategy Session
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Student in library"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-2xl"
            >
              <div className="text-3xl font-bold" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}>96%</div>
              <div className="text-sm text-gray-600">Placement Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}