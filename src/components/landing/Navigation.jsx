import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, MessageCircle } from 'lucide-react';
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

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navLinks = [
    { 
      label: 'About Us', 
      isDropdown: true,
      items: [
        { label: 'Mission', id: 'mission' },
        { label: 'Meet the Team', id: 'team' }
      ]
    },
    { label: 'Services', id: 'services' },
    { label: 'Success Stories', id: 'testimonial' },
    { 
      label: 'Contact Us', 
      isDropdown: true,
      items: [
        { label: 'Call', id: 'footer' },
        { label: 'Socials', id: 'footer' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} style={{ backgroundColor: '#0A192F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6979104353f8a38b3d9a07ec/82f700ed7_image-removebg-preview8.png"
              alt="DreamPathPrep Icon"
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-white font-semibold text-base md:text-lg tracking-wide">DreamPathPrep</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.label} className="relative group">
                  <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                    {link.label}
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollTo(item.id)}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo('footer')}
              className="rounded-full px-6 text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#3E5C76' }}
            >
              <span className="hidden lg:inline">Book Strategy Call</span>
              <span className="lg:hidden">Book Call</span>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Book Now Button */}
            <Button
              onClick={() => scrollTo('footer')}
              size="sm"
              className="rounded-full px-3 text-white font-medium text-xs"
              style={{ backgroundColor: '#3E5C76' }}
            >
              Book Call
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                      className="text-white/80 hover:text-white text-left font-medium transition-colors w-full"
                    >
                      {link.label}
                    </button>
                    {dropdownOpen === link.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.items.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => scrollTo(item.id)}
                            className="block w-full text-left text-sm text-white/70 hover:text-white transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-white/80 hover:text-white text-left font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <Button
                onClick={() => scrollTo('footer')}
                className="rounded-full px-6 text-white font-medium mt-2 w-fit"
                style={{ backgroundColor: '#3E5C76' }}
              >
                Book Call
              </Button>

              {/* Follow Us Section - Mobile Only */}
              <div className="pt-6 border-t border-white/10 mt-4">
                <p className="text-white/60 text-sm font-medium mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/dreampathprep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Dreampathprep/61582060985912/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}