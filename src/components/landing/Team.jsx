import React, { useState } from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Komal Das, PhD',
    role: 'Co-Founder',
    expertise: 'Strategic Planning & Leadership',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6979104353f8a38b3d9a07ec/92f0e6519_IMG_6491.jpeg',
    bio: 'Specializes in early academic roadmapping and building the high-impact leadership profiles that elite colleges demand.'
  },
  {
    name: 'Mridula Gupta, PhD',
    role: 'Co-Founder',
    expertise: 'School Fit & Financial Aid',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6979104353f8a38b3d9a07ec/92502348c_Mridula.jpg',
    bio: 'Focuses on data-driven college list creation and maximizing scholarship opportunities to ensure the perfect academic and financial match.'
  }
];

export default function Team() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="team" className="py-24 md:py-32 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
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

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
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
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                
                {/* Default Info - Always visible */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hoveredIdx === idx ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm">{member.role}</p>
                  </motion.div>
                </div>
                
                {/* Bio Card - Slides up on hover */}
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: hoveredIdx === idx ? '0%' : '100%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-0 flex flex-col justify-end p-6 z-20"
                  style={{ backgroundColor: 'rgba(10, 25, 47, 0.97)' }}
                >
                  <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <div 
                    className="text-sm font-semibold mb-3"
                    style={{ color: '#C5A059' }}
                  >
                    {member.expertise}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}