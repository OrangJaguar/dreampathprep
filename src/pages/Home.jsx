import React, { useState, useEffect } from 'react';
import IntroAnimation from '@/components/landing/IntroAnimation';
import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import LogoTicker from '@/components/landing/LogoTicker';
import Problem from '@/components/landing/Problem';
import Mission from '@/components/landing/Mission';
import Team from '@/components/landing/Team';
import Services from '@/components/landing/Services';
import Testimonial from '@/components/landing/Testimonial';
import Diagnostic from '@/components/landing/Diagnostic';
import Footer from '@/components/landing/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F8F4' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
          
          html {
            scroll-behavior: smooth;
          }
          
          ::selection {
            background-color: rgba(197, 160, 89, 0.3);
          }
        `}
      </style>
      
      <Navigation />
      <Hero />
      <LogoTicker />
      <Problem />
      <Mission />
      <Team />
      <Services />
      <Testimonial />
      <Diagnostic />
      <Footer />
    </div>
  );
}