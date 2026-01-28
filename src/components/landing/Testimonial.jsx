import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Our counselor's expertise made the process clear and achievable. She helped him craft a standout application that truly reflected who he is. And my son also got admission in OSU!",
    author: "Sheeta Ravi",
    role: "Parent, Class of 2024"
  },
  {
    quote: "The personal and targeted feedback on my college application and essays helped me get admissions into my dream program, which led me to find a job in a top company.",
    author: "Ankur Pandey",
    role: "Student"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonial" className="py-24 md:py-32" style={{ backgroundColor: '#C5A059' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative min-h-[450px] flex items-center">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
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
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-white/90">
                <div className="font-semibold text-lg">— {testimonials[currentIndex].author}</div>
                <div className="text-white/70 text-sm">{testimonials[currentIndex].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}