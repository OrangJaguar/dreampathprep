import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, Pen, CheckSquare, Target, DollarSign } from 'lucide-react';

const services = [
        {
          title: 'Strategic Planning',
          icon: Compass,
          description: 'Course selection, extracurricular strategy, and leadership development to build a strong profile early.',
          color: '#C5A059'
        },
        {
          title: 'Test Strategy (SAT/ACT)',
          icon: Target,
          description: 'Timeline planning and score assessment. Note: We provide strategic planning, not subject tutoring.',
          color: '#C5A059'
        },
        {
          title: 'College List & Fit Analysis',
          icon: MapPin,
          description: 'Data-driven research to find schools that match your student\'s academic goals, culture, and budget.',
          color: '#C5A059'
        },
        {
          title: 'Essay & Narrative Coaching',
          icon: Pen,
          description: 'Brainstorming and editing to craft authentic personal statements that stand out in the admissions pile.',
          color: '#3E5C76'
        },
        {
          title: 'Application Management',
          icon: CheckSquare,
          description: 'Comprehensive support for the Common App, supplements, and timelines to ensure nothing is missed.',
          color: '#3E5C76'
        },
        {
          title: 'Financial Aid & Scholarships',
          icon: DollarSign,
          description: 'Guidance on FAFSA, CSS Profile, and scholarship identification to maximize college affordability.',
          color: '#3E5C76'
        }
      ];

export default function Services() {
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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div 
                className="bg-white rounded-xl p-6 h-full border-2 hover:shadow-lg transition-all"
                style={{ borderColor: service.color }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                {/* Title */}
                <h4 
                  className="text-xl font-bold mb-4"
                  style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => {
              document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all"
            style={{ backgroundColor: '#C5A059' }}
          >
            Book Your Strategy Call for Your Tailored Plan
          </button>
        </motion.div>
      </div>
    </section>
  );
}