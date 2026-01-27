import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const questions = [
  {
    question: 'What grade is your student currently in?',
    options: ['9th Grade', '10th Grade', '11th Grade', '12th Grade']
  },
  {
    question: 'Do you have a balanced list of "Reach" vs "Financial Fit" schools?',
    options: ['Yes, we have a clear list', 'Working on it', 'Not yet', 'Not sure where to start']
  },
  {
    question: 'Does your student have a compelling leadership narrative?',
    options: ['Yes, very strong', 'Some leadership roles', 'Limited experience', 'No, need help developing one']
  },
  {
    question: 'Is your testing strategy aligned with your target schools?',
    options: ['Yes, all set', 'Partially planned', 'Still figuring it out', 'Haven\'t started planning']
  },
  {
    question: 'How prepared are you for college essays?',
    options: ['Very prepared', 'Somewhat prepared', 'Just starting', 'Need significant help']
  }
];

export default function Diagnostic() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIdx) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionIdx }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResult) {
    return (
      <section className="py-24 md:py-32 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
            style={{ border: '2px solid #C5A059' }}
          >
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}
            >
              <CheckCircle2 className="w-10 h-10" style={{ color: '#C5A059' }} />
            </div>
            
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
            >
              Don't Leave It to Chance
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Most families discover gaps in their strategy too late. Let our PhD-led team identify opportunities before deadlines approach and create a winning strategy tailored to your student.
            </p>
            
            <Button
              onClick={scrollToFooter}
              size="lg"
              className="w-full rounded-full text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-xl mb-4"
              style={{ backgroundColor: '#3E5C76' }}
            >
              Get Your Free Strategy Session
            </Button>
            
            <button
              onClick={resetQuiz}
              className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              Retake Assessment
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          style={{ border: '1px solid rgba(197, 160, 89, 0.3)' }}
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium" style={{ color: '#0A192F' }}>
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-full"
                style={{ backgroundColor: '#C5A059' }}
              />
            </div>
          </div>

          {/* Question */}
          <h3 
            className="text-xl md:text-2xl font-bold mb-6"
            style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
          >
            {questions[currentStep].question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {questions[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                  answers[currentStep] === idx
                    ? 'text-white shadow-md'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
                style={answers[currentStep] === idx ? { backgroundColor: '#3E5C76' } : {}}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      answers[currentStep] === idx ? 'border-white' : 'border-gray-300'
                    }`}
                  >
                    {answers[currentStep] === idx && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            {currentStep > 0 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              disabled={answers[currentStep] === undefined}
              className="flex-1 rounded-full text-white font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#3E5C76' }}
            >
              {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}