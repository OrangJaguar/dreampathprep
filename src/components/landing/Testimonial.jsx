import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Our counselor's expertise made the process clear and achievable. She helped him craft a standout application that truly reflected who he is. And my son also got admission in OSU!",
    author: 'Sheeta Ravi',
    role: 'Parent'
  },
  {
    quote: "Dr. Komal Das played a pivotal role in shaping my professional growth and guiding me every step of the way toward admission to the Georgia Institute of Technology. She is not only an exceptional scientist and leader in her field but also an inspiring mentor who brings out the best in her students—always supporting and investing in their growth, encouraging them to step beyond their comfort zones, and providing thoughtful guidance along the way. Under her mentorship, I not only advanced my scientific skills but also strengthened my leadership, collaboration, and problem-solving abilities. Working with her was a transformative experience that has left a lasting impact on my development.",
    author: 'Vidhya',
    role: 'Student'
  },
  {
    quote: "DreamPathPrep was incredible. Their guidance, structure, and heartfelt support helped my child shine throughout the admissions process - and ultimately earn an acceptance to Cornell. We're deeply grateful for their expertise and the confidence they brought to our family.",
    author: 'Father of Ridam Shah',
    role: 'Parent'
  }
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonial" className="py-24 md:py-32" style={{ backgroundColor: '#C5A059' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Auto-rotating testimonials */}
        <div className="relative min-h-[380px] md:min-h-[320px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <blockquote
                className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;{testimonials[index].quote}&rdquo;
              </blockquote>

              <div className="text-white/90">
                <div className="font-semibold text-lg">— {testimonials[index].author}</div>
                <div className="text-white/70 text-sm">{testimonials[index].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}