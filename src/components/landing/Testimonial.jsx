import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-24 md:py-32" style={{ backgroundColor: '#C5A059' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-white fill-white" />
            ))}
          </div>

          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Quote */}
          <blockquote 
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Our counselor's expertise made the process clear and achievable. She helped him craft a standout application that truly reflected who he is. And my son also got admission in OSU!"
          </blockquote>

          {/* Author */}
          <div className="text-white/90">
            <div className="font-semibold text-lg">— Sheeta Ravi</div>
            <div className="text-white/70 text-sm">Parent, Class of 2024</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}