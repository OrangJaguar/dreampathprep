import React, { useState, useEffect } from 'react';
import { Key, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'The Problem', id: 'problem' },
    { label: 'Our Mission', id: 'mission' },
    { label: 'The Team', id: 'team' },
    { label: 'Services', id: 'services' },
    { label: 'Results', id: 'testimonial' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} style={{ backgroundColor: '#0A192F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6979104353f8a38b3d9a07ec/82f700ed7_image-removebg-preview8.png"
              alt="DreamPathPrep Icon"
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-white font-semibold text-base md:text-lg tracking-wide">DreamPathPrep</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo('footer')}
              className="rounded-full px-6 text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#3E5C76' }}
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/80 hover:text-white text-left font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo('footer')}
                className="rounded-full px-6 text-white font-medium mt-2 w-fit"
                style={{ backgroundColor: '#3E5C76' }}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}