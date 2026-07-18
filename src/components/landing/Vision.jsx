import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Layers, Rocket } from 'lucide-react';

const differentiators = [
  {
    number: '01',
    icon: Fingerprint,
    title: 'Tailored to You',
    description: "No templates, no shortcuts. Every strategy is built around your child's unique story, goals, and circumstances."
  },
  {
    number: '02',
    icon: Layers,
    title: 'Holistic Awareness',
    description: 'Financial realities, visa status, health needs, and personal priorities all shape the path forward — not limit it.'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Beyond Admission',
    description: 'We build the foundation for thriving not just at your dream college, but throughout your career and life.'
  }
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32" style={{ backgroundColor: '#0A192F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Vision text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase block mb-4" style={{ color: '#C5A059' }}>
              Our Vision
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Student,<br />A Unique Path
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              No two students share the same aspirations—or the same constraints. Financial considerations, health needs, visa status, and personal priorities all shape what's possible, and those realities should guide strategy, not limit ambition. We believe decisions should never follow a one-size-fits-all model. Our vision is to deliver deeply personalized, strategic guidance that aligns each student's path with their unique circumstances and goals – transforming aspirations for dream colleges and future careers into reality through intentional positioning and planning, and building a strong foundation for long-term success.
            </p>
          </motion.div>

          {/* Right: Differentiator cards */}
          <div className="space-y-5">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(197, 160, 89, 0.2)'
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center gap-3">
                    <span
                      className="text-3xl font-bold"
                      style={{ color: '#C5A059', fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.number}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: '#C5A059' }} />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2 text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}