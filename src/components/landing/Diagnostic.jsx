import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';

// NEW STRATEGIC QUESTIONS (Holistic & Career Focused)
const questions = [
  {
    id: 'grade',
    question: 'First, what grade is your student currently in?',
    options: ['8th - 9th Grade (Early Planning)', '10th Grade (Foundation Year)', '11th Grade (Prime Time)', '12th Grade (Application Crunch)']
  },
  {
    id: 'career',
    question: 'How clear is your student on their future major or career path?',
    options: ['They have a specific career/major in mind', 'They have a general area of interest (STEM, Arts, etc.)', 'They are undecided/exploring', 'We are worried they are choosing the wrong path']
  },
  {
    id: 'academics',
    question: 'How would you describe their current course load and academic performance?',
    options: ['Thriving in AP/IB/Honors courses', 'Doing well, but could be challenged more', 'Struggling to balance grades and activities', 'We need help selecting the right courses for next year']
  },
  {
    id: 'narrative',
    question: 'Beyond grades, does your student have a signature "Story" or passion project?',
    options: ['Yes, they have a clear standout narrative', 'They participate in many clubs, but no clear "theme"', 'Limited extracurricular involvement', 'Not sure what colleges are looking for']
  },
  {
    id: 'financial',
    question: 'How confident are you in finding colleges that are both an "Academic" AND "Financial" fit?',
    options: ['Very confident', 'We have a list, but unsure about costs/aid', 'Worried about the ROI of college tuition', 'We haven\'t started discussing the budget yet']
  }
];

export default function Diagnostic() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showForm, setShowForm] = useState(false); // New State for Lead Capture
  const [showResult, setShowResult] = useState(false);
  
  // LEAD CAPTURE STATE
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: ''
  });

  const handleAnswer = (optionIdx) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionIdx }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // INSTEAD OF SHOWING RESULT, SHOW FORM
      setShowForm(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // HANDLE FORM SUBMISSION
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Map answers to readable text
      const mappedAnswers = {
        grade: questions[0].options[answers[0]],
        career: questions[1].options[answers[1]],
        academics: questions[2].options[answers[2]],
        narrative: questions[3].options[answers[3]],
        financial: questions[4].options[answers[4]]
      };

      // Submit to backend (saves to database + Google Sheets)
      await base44.functions.invoke('submitQuizResponse', {
        formData,
        answers: mappedAnswers
      });

      setShowForm(false);
      setShowResult(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your response. Please try again.');
    }
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowForm(false);
    setShowResult(false);
    setFormData({ name: '', email: '', phone: '', school: '' });
  };

  // DYNAMIC RESULT TEXT BASED ON GRADE LEVEL (Q1)
  const getResultContent = () => {
    const gradeAnswer = answers[0]; // Index of the grade answer
    
    if (gradeAnswer <= 1) { // 9th or 10th Grade
      return {
        title: "The 'Foundation' Phase",
        text: "Your student is in the critical window for discovery. Right now, success isn't about stressing over applications—it's about strategic course selection and exploring authentic career interests. Our Early Strategy approach can help you build a profile that feels natural, not forced."
      };
    } else { // 11th or 12th Grade
      return {
        title: "The 'Execution' Phase",
        text: "The timeline is accelerating. Admissions officers are looking for a cohesive narrative that connects your student's past achievements to their future career potential. It is time to refine the college list, focus on 'Fit' over 'Prestige,' and craft essays that stand out."
      };
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const resultContent = getResultContent();

  // --- RENDER: RESULTS PAGE ---
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
              {resultContent.title}
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {resultContent.text}
            </p>
            
            <Button
              onClick={scrollToFooter}
              size="lg"
              className="w-full rounded-full text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-xl mb-4"
              style={{ backgroundColor: '#3E5C76' }}
            >
              Book Your Free Strategy Session
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

  // --- RENDER: LEAD CAPTURE FORM ---
  if (showForm) {
    return (
      <section className="py-24 md:py-32 border-t-2 border-dotted" style={{ backgroundColor: '#F9F8F4', borderColor: '#C5A059' }}>
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="text-center mb-6">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Lock className="w-6 h-6 text-[#0A192F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A192F]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Unlock Your Results
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Enter your details to generate your personalized strategy profile.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent Name</label>
                <input 
                  required
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  required
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  required
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">High School & District</label>
                <input 
                  required
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  value={formData.school}
                  onChange={(e) => setFormData({...formData, school: e.target.value})}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full py-6 rounded-lg text-white font-semibold text-lg mt-4 transition-all hover:opacity-90"
                style={{ backgroundColor: '#3E5C76' }}
              >
                View Assessment
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    )
  }

  // --- RENDER: QUESTIONS ---
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
            Take our holistic assessment to find gaps in your strategy.
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
            className="text-xl md:text-2xl font-bold mb-6 leading-tight"
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
              {currentStep === questions.length - 1 ? 'Analyze & Unlock' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}