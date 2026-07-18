import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Radar, BarChart3, Sparkles } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
          >
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            We simplify the college admissions journey through personalized, strategic guidance. Our experts help students identify their unique strengths and translate them into compelling applications that earn admission to colleges where they can truly thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* PhD Advantage Box */}
          <div 
            className="rounded-2xl p-8 md:p-12 bg-white"
            style={{ border: '2px solid #C5A059' }}
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}
              >
                <Microscope className="w-10 h-10" style={{ color: '#C5A059' }} />
              </div>
              
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                >
                  The DreamPathPrep Strategic Admissions Advantage
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  College admissions are constantly evolving. Our methodology isn't guesswork - it's precise, research-backed, and data-driven. We combine real-time admissions intelligence with deep expertise in academic systems and career pathways to keep your child aligned with what top colleges truly value. Instead of generic templates or last-minute scrambling, we craft a personalized, multi-year strategy that helps your child stand out with clarity and purpose—while building a foundation for long-term success beyond admissions.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: Radar, label: 'Real-Time Admissions Intelligence' },
                    { icon: BarChart3, label: 'Data-Driven Strategy' },
                    { icon: Sparkles, label: 'Personalized Narratives' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: '#0A192F' }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-sm" style={{ color: '#0A192F' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}