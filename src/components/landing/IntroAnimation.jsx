import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
  const [mainText, setMainText] = useState('');
  const [accentText, setAccentText] = useState('');
  const [sloganText, setSloganText] = useState('');
  const [logoSlide, setLogoSlide] = useState(false);

  const fullMainText = "Dream";
  const fullAccentText = "PathPrep";
  const fullSloganText = "EMPOWERING DREAMS, ONE STUDENT AT A TIME";
  const speed = 55; // ms per character

  useEffect(() => {
    // Type main text
    let mainIndex = 0;
    const mainInterval = setInterval(() => {
      if (mainIndex < fullMainText.length) {
        setMainText(prev => prev + fullMainText.charAt(mainIndex));
        mainIndex++;
      } else {
        clearInterval(mainInterval);
        
        // Type accent text
        let accentIndex = 0;
        const accentInterval = setInterval(() => {
          if (accentIndex < fullAccentText.length) {
            setAccentText(prev => prev + fullAccentText.charAt(accentIndex));
            accentIndex++;
          } else {
            clearInterval(accentInterval);
            
            // Type slogan after a short delay
            setTimeout(() => {
              let sloganIndex = 0;
              const sloganInterval = setInterval(() => {
                if (sloganIndex < fullSloganText.length) {
                  setSloganText(prev => prev + fullSloganText.charAt(sloganIndex));
                  sloganIndex++;
                } else {
                  clearInterval(sloganInterval);
                  
                  // Start logo slide animation
                  setTimeout(() => {
                    setLogoSlide(true);
                    
                    // Complete animation and hide intro
                    setTimeout(() => {
                      onComplete();
                    }, 1000);
                  }, 300);
                }
              }, speed);
            }, 150);
          }
        }, speed);
      }
    }, speed + 200);

    return () => {
      clearInterval(mainInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ backgroundColor: '#0A192F' }}>
      <div className="relative flex items-center justify-center gap-6 min-h-[220px]">
        {/* Key Logo */}
        <motion.div
          className="relative flex flex-col items-center justify-start"
          style={{ width: '60px', height: '160px' }}
          animate={logoSlide ? { x: -120 } : { x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Key Head */}
          <div
            className="relative"
            style={{
              width: '52px',
              height: '52px',
              border: '6px solid #F9F8F4',
              borderRadius: '26px 26px 18px 18px',
              borderBottom: 'none',
            }}
          />
          
          {/* Key Stem */}
          <div
            style={{
              width: '12px',
              height: '70px',
              background: 'linear-gradient(to bottom, #F9F8F4 0% 30%, #C5A059 30% 100%)',
              marginTop: '-3px',
            }}
          />
          
          {/* Key Nib */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '14px solid transparent',
              borderRight: '14px solid transparent',
              borderTop: '24px solid #C5A059',
              marginTop: '6px',
            }}
          />

          {/* Blinking Cursor */}
          {!logoSlide && (
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: '105%',
                width: '2px',
                height: '70px',
                backgroundColor: '#C5A059',
              }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: 'steps(1)' }}
            />
          )}
        </motion.div>

        {/* Text */}
        <div className="font-serif text-[2.3rem] leading-tight whitespace-nowrap overflow-hidden">
          <div className="block">
            <span className="text-white font-semibold">{mainText}</span>
            <span className="font-semibold" style={{ color: '#C5A059' }}>{accentText}</span>
          </div>
          <div className="block text-[0.95rem] tracking-[0.12em] uppercase text-white mt-2">
            {sloganText}
          </div>
        </div>
      </div>
    </div>
  );
}