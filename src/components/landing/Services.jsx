import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, Pen, CheckSquare, Target, DollarSign } from 'lucide-react';

const plans = [
  {
    planName: 'The Foundation',
    planGrade: 'Grades 9-10',
    planDescription: 'Build a strong foundation that positions your student for success from day one.',
    color: '#C5A059',
    services: [
      {
        title: 'Strategic Planning',
        subtitle: 'Grades 9-10',
        icon: Compass,
        description: 'Course selection, extracurricular strategy, and leadership development to build a strong profile early.'
      },
      {
        title: 'Test Strategy (SAT/ACT)',
        subtitle: 'Timeline Planning',
        icon: Target,
        description: 'Timeline planning and score assessment. Note: We provide strategic planning, not subject tutoring.'
      },
      {
        title: 'College List & Fit Analysis',
        subtitle: 'Early Research',
        icon: MapPin,
        description: 'Data-driven research to find schools that match your student\'s academic goals, culture, and budget.'
      }
    ]
  },
  {
    planName: 'The Application',
    planGrade: 'Grades 11-12',
    planDescription: 'Transform your student\'s achievements into compelling applications that stand out.',
    color: '#3E5C76',
    services: [
      {
        title: 'Essay & Narrative Coaching',
        subtitle: 'Personal Statements',
        icon: Pen,
        description: 'Brainstorming and editing to craft authentic personal statements that stand out in the admissions pile.'
      },
      {
        title: 'Application Management',
        subtitle: 'Complete Support',
        icon: CheckSquare,
        description: 'Comprehensive support for the Common App, supplements, and timelines to ensure nothing is missed.'
      },
      {
        title: 'Financial Aid & Scholarships',
        subtitle: 'Maximize Affordability',
        icon: DollarSign,
        description: 'Guidance on FAFSA, CSS Profile, and scholarship identification to maximize college affordability.'
      }
    ]
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

        <div className="space-y-16">
          {plans.map((plan, planIdx) => (
            <div key={planIdx}>
              {/* Plan Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3" style={{ backgroundColor: `${plan.color}20` }}>
                  <span className="text-sm font-semibold" style={{ color: plan.color }}>{plan.planGrade}</span>
                </div>
                <h3 
                  className="text-3xl md:text-4xl font-bold mb-3"
                  style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                >
                  {plan.planName}
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl">{plan.planDescription}</p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {plan.services.map((service, idx) => (
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
                      style={{ borderColor: plan.color }}
                    >
                      {/* Icon */}
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${plan.color}20` }}
                      >
                        <service.icon className="w-7 h-7" style={{ color: plan.color }} />
                      </div>

                      {/* Title */}
                      <h4 
                        className="text-xl font-bold mb-2"
                        style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                      >
                        {service.title}
                      </h4>

                      {/* Subtitle */}
                      <p className="text-sm mb-3 font-medium" style={{ color: plan.color }}>
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}