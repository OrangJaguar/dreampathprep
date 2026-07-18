import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, MapPin, Pen, CheckSquare, Target, DollarSign, Lightbulb, Award } from 'lucide-react';

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
    title: 'Self Discovery',
    icon: Lightbulb,
    description: 'Discover your core, harness your strengths and passion, awaken your potential, and unleash your true self.',
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
  },
  {
    title: 'Decision & Enrollment Strategy',
    icon: Award,
    description: 'Post-acceptance guidance to select a college that offers well-rounded learning, personal growth, and career-aligned opportunities.',
    color: '#3E5C76'
  }
];

const packages = [
  {
    title: 'Admissions Advantage Audit™',
    description: 'Know exactly where your student stands and what to prioritize next.',
    grade: '9–12',
    duration: '1 week'
  },
  {
    title: 'Freshman Foundation Blueprint™',
    description: 'Build clear direction and a strong academic foundation from day one.',
    grade: '9',
    duration: '3 months'
  },
  {
    title: 'Sophomore Positioning Blueprint™',
    description: 'Create a differentiation strategy that sets your student apart.',
    grade: '10',
    duration: '3 months'
  },
  {
    title: 'Junior Competitive Advantage Program™',
    description: 'Become fully application-ready with a competitive edge.',
    grade: '11',
    duration: '6 months'
  },
  {
    title: 'Rising Senior Application Launch™',
    description: 'Complete your application strategy before senior year begins.',
    grade: 'Summer after 11',
    duration: '8 weeks'
  },
  {
    title: 'College Application Execution System™',
    description: 'Complete applications strategically and on schedule.',
    grade: '12',
    duration: '4–6 months'
  },
  {
    title: 'Application Rescue Intensive™',
    description: 'Fix weak applications quickly and confidently.',
    grade: '12',
    duration: '2–4 weeks'
  },
  {
    title: 'College Decision Optimization™',
    description: 'Choose the best college offer for your career success.',
    grade: '12',
    duration: '2 weeks'
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('comprehensive');

  const tabStyle = (isActive) => isActive
    ? { backgroundColor: '#0A192F', borderColor: '#0A192F', color: 'white' }
    : { backgroundColor: 'transparent', borderColor: 'rgba(10, 25, 47, 0.2)', color: 'rgba(10, 25, 47, 0.6)' };

  return (
    <section id="services" className="py-16 md:py-20 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - always visible */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
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

        {/* Tab Pills */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('comprehensive')}
            className="px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all border-2 hover:shadow-md"
            style={tabStyle(activeTab === 'comprehensive')}
          >
            Comprehensive Support
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className="px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all border-2 hover:shadow-md"
            style={tabStyle(activeTab === 'packages')}
          >
            Grade-Specific Programs
          </button>
        </div>

        {/* Grid - changes based on tab */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            {activeTab === 'comprehensive' ? (
              <motion.div
                key="comprehensive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 h-full border-2 hover:shadow-lg transition-all flex flex-col"
                    style={{ borderColor: service.color }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h4
                      className="text-lg font-bold mb-3"
                      style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 h-full border-2 hover:shadow-lg transition-all flex flex-col"
                    style={{ borderColor: '#0A192F' }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 flex-shrink-0 font-bold text-sm"
                      style={{ backgroundColor: '#C5A059', color: '#0A192F' }}
                    >
                      {idx + 1}
                    </div>
                    <h4
                      className="text-base font-bold mb-3 leading-tight"
                      style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                    >
                      {pkg.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                      {pkg.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(10, 25, 47, 0.08)', color: '#0A192F' }}
                      >
                        Grade {pkg.grade}
                      </span>
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)', color: '#8B6914' }}
                      >
                        {pkg.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Button - always visible */}
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