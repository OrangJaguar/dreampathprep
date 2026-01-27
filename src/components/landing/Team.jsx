import React, { useState } from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Khushbu Mishra, PhD',
    role: 'Co-Founder',
    expertise: 'Narrative Strategy & Essay Excellence',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Former Stanford admissions reader with expertise in crafting compelling personal narratives.'
  },
  {
    name: 'Komal Das, PhD',
    role: 'Co-Founder',
    expertise: 'Academic Planning & STEM Focus',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Research scientist turned education strategist, specializing in STEM pathways.'
  },
  {
    name: 'Mridula Gupta, PhD',
    role: 'Co-Founder',
    expertise: 'Financial Aid & School Selection',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80',
    bio: 'Expert in maximizing financial aid packages and strategic school fit analysis.'
  }
];

export default function Team() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="team" className="py-24 md:py-32" style={{ backgroundColor: '#F9F8F4' }}>
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
            Meet Your Strategists
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A team of accomplished PhDs dedicated to your child's success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
                
                {/* Bio Card - Slides up on hover */}
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: hoveredIdx === idx ? '0%' : '100%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-x-0 bottom-0 p-6"
                  style={{ backgroundColor: 'rgba(10, 25, 47, 0.95)' }}
                >
                  <p className="text-white/90 text-sm leading-relaxed mb-3">{member.bio}</p>
                  <div 
                    className="text-sm font-semibold"
                    style={{ color: '#C5A059' }}
                  >
                    {member.expertise}
                  </div>
                </motion.div>
                
                {/* Default Info */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}