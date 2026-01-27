import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, FileEdit, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'The Foundation',
    subtitle: 'Grades 9-10',
    icon: BookOpen,
    items: [
      'Academic Advising & Course Selection',
      'Extracurricular Strategy Development',
      'Leadership Opportunity Identification',
      'Summer Program Planning',
      'Early College Research'
    ],
    description: 'Build a strong foundation that positions your student for success from day one.'
  },
  {
    title: 'The Application',
    subtitle: 'Grades 11-12',
    icon: FileEdit,
    items: [
      'Personalized College List & Fit Analysis',
      'Essay Coaching & Story Development',
      'Test Strategy (SAT/ACT Optimization)',
      'Financial Aid & FAFSA Guidance',
      'Interview Preparation'
    ],
    description: 'Transform your student\'s achievements into compelling applications that stand out.'
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 md:py-32 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
          >
            Comprehensive Support for Every Stage
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored guidance from the first day of high school through acceptance letters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div 
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-300 h-full"
                style={{ 
                  border: hoveredIdx === idx ? '2px solid #C5A059' : '2px solid transparent',
                  transform: hoveredIdx === idx ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)', color: '#C5A059' }}
                    >
                      {service.subtitle}
                    </div>
                    <h3 
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0A192F' }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-4 mb-8">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(197, 160, 89, 0.2)' }}
                      >
                        <Check className="w-3 h-3" style={{ color: '#C5A059' }} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIdx === idx ? 1 : 0 }}
                  onClick={scrollToFooter}
                  className="flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: '#3E5C76' }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}