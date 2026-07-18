import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, TrendingUp, ListChecks, Map, Crown, Compass, BadgeCheck } from 'lucide-react';

const team = [
  {
    name: 'Komal Das, PhD',
    role: 'Co-Founder',
    image: 'https://media.base44.com/images/public/6979104353f8a38b3d9a07ec/bccccc3da_Komal.png'
  },
  {
    name: 'Mridula Gupta, PhD',
    role: 'Co-Founder',
    image: 'https://media.base44.com/images/public/6979104353f8a38b3d9a07ec/d9a05b5a1_Midu.jpg'
  }
];

const specialties = [
  { icon: GraduationCap, label: 'Academic & Financial Fit' },
  { icon: TrendingUp, label: 'Scholarship Maximization' },
  { icon: ListChecks, label: 'Curated College Lists' },
  { icon: Map, label: 'Multi-Year Roadmapping' },
  { icon: Crown, label: 'Leadership Development' },
  { icon: Compass, label: 'Career Pathway Alignment' }
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-20 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
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
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                  <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NACAC Verified Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <img
            src="https://media.base44.com/images/public/6979104353f8a38b3d9a07ec/c3c9ee094_nacac.webp"
            alt="NACAC Member"
            className="h-16 md:h-20 w-auto"
          />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(197, 160, 89, 0.12)', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
            <BadgeCheck className="w-5 h-5" style={{ color: '#C5A059' }} />
            <span className="text-sm font-bold" style={{ color: '#0A192F' }}>Verified Members</span>
          </div>
        </motion.div>

        {/* Shared Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-8 max-w-4xl mx-auto"
        >
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white"
              style={{ border: '1px solid rgba(197, 160, 89, 0.3)' }}
            >
              <item.icon className="w-4 h-4" style={{ color: '#C5A059' }} />
              <span className="text-xs font-medium" style={{ color: '#0A192F' }}>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}