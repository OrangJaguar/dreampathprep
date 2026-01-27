import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Key, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="py-24 md:py-32" style={{ backgroundColor: '#0A192F' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Start?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            As soon as you think about college, you are already behind. Let's catch up.
          </p>
        </motion.div>

        {/* Calendly Embed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-16 text-center"
        >
          <div className="max-w-md mx-auto">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}
            >
              <Key className="w-8 h-8" style={{ color: '#C5A059' }} />
            </div>
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
            >
              Schedule Your Free Consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Choose a time that works for you. Our strategy sessions are complimentary and obligation-free.
            </p>
            
            {/* Calendly Button/Widget Placeholder */}
            <div 
              className="border-2 border-dashed rounded-xl p-8 mb-4"
              style={{ borderColor: '#C5A059' }}
            >
              <p className="text-gray-500 text-sm mb-4">Calendly Widget Integration</p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#3E5C76' }}
              >
                Book Your Session
              </a>
            </div>
            
            <p className="text-xs text-gray-400">
              30-minute strategy call with a PhD consultant
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div className="flex justify-center md:justify-start items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6979104353f8a38b3d9a07ec/596edc1ae_Logo_Cream_Icon.png"
                alt="DreamPathPrep Icon"
                className="h-10 w-auto"
              />
              <span className="text-white font-semibold text-lg tracking-wide">DreamPathPrep</span>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col items-center gap-4 text-white/70 text-sm">
              <a href="mailto:KMK@dreampathprep.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                KMK@dreampathprep.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Dublin, Ohio
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-white/40 text-sm">
            © {new Date().getFullYear()} DreamPathPrep. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}