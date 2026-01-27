import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const questions = [
  'Do you have a balanced list of "Reach" vs "Financial Fit" schools?',
  'Does your student have a compelling leadership narrative?',
  'Is your testing strategy aligned with your target major?',
  'Have you identified 3+ meaningful extracurricular activities?',
  'Do you have a clear essay topic that showcases authenticity?'
];

export default function Diagnostic() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const toggleAnswer = (idx, value) => {
    setAnswers(prev => ({ ...prev, [idx]: value }));
    if (Object.keys(answers).length >= 2 && !showResult) {
      setTimeout(() => setShowResult(true), 500);
    }
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#F9F8F4' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
          >
            Is Your Student on Track?
          </h2>
          <p className="text-gray-600 text-lg">
            Take our quick assessment to see where you stand
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          style={{ border: '1px solid rgba(197, 160, 89, 0.3)' }}
        >
          <div className="space-y-6">
            {questions.map((question, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl transition-colors"
                style={{ backgroundColor: answers[idx] !== undefined ? 'rgba(197, 160, 89, 0.05)' : 'transparent' }}
              >
                <div className="flex-1">
                  <p className="font-medium" style={{ color: '#0A192F' }}>{question}</p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={() => toggleAnswer(idx, true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      answers[idx] === true 
                        ? 'text-white' 
                        : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                    }`}
                    style={answers[idx] === true ? { backgroundColor: '#3E5C76' } : {}}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => toggleAnswer(idx, false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      answers[idx] === false 
                        ? 'text-white' 
                        : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                    }`}
                    style={answers[idx] === false ? { backgroundColor: '#C5A059' } : {}}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 pt-8 border-t"
                style={{ borderColor: 'rgba(197, 160, 89, 0.3)' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}
                  >
                    <AlertCircle className="w-6 h-6" style={{ color: '#C5A059' }} />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
                    >
                      Don't leave it to chance.
                    </h3>
                    <p className="text-gray-600">
                      Most families discover gaps in their strategy too late. Let our experts identify opportunities before deadlines approach.
                    </p>
                  </div>
                </div>
                <Button
                  onClick={scrollToFooter}
                  size="lg"
                  className="w-full rounded-full text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ backgroundColor: '#3E5C76' }}
                >
                  Get a Free Diagnostic Audit
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}