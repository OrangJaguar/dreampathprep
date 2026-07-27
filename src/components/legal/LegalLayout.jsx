import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({ title, lastUpdated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F8F4' }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');`}
      </style>

      {/* Header */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: '#0A192F' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6979104353f8a38b3d9a07ec/82f700ed7_image-removebg-preview8.png"
              alt="DreamPathPrep"
              className="h-10 w-auto"
            />
            <span className="text-white font-semibold text-base md:text-lg">DreamPathPrep</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center"
          style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h1>
        {lastUpdated && (
          <p className="text-center text-gray-500 text-sm mb-12">{lastUpdated}</p>
        )}
        <div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          style={{ border: '1px solid #E5E4DD' }}
        >
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}