import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, FileStack, Users } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
          >
            The Admissions Landscape Has Changed
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Application volumes are at record highs, and good grades are no longer enough. The process is complex, but it doesn't have to be overwhelming.{' '}
            <span className="font-semibold" style={{ color: '#0A192F' }}>You don't just need a tutor; you need a strategist.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingDown,
              stat: '19%',
              label: 'Average Acceptance Rate',
              desc: 'At top 100 U.S. universities'
            },
            {
              icon: FileStack,
              stat: '40%',
              label: 'Increase in Applications',
              desc: 'Over the past five years'
            },
            {
              icon: Users,
              stat: '90%',
              label: 'Need More Than Grades',
              desc: 'Strong ECs and essays are essential'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              style={{ border: '1px solid rgba(197, 160, 89, 0.2)' }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}
              >
                <item.icon className="w-7 h-7" style={{ color: '#C5A059' }} />
              </div>
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
              >
                {item.stat}
              </div>
              <div className="font-semibold mb-1" style={{ color: '#0A192F' }}>{item.label}</div>
              <div className="text-gray-500 text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}