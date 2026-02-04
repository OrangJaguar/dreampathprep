import React from 'react';

const universities = [
  "Harvard",
  "Duke", 
  "NYU",
  "Imperial College",
  "University of Pennsylvania",
  "Georgia Tech",
  "Penn State",
  "Ohio State University",
  "North Carolina State University",
  "Stetson University",
  "Syracuse University",
  "University of Central Florida"
];

export default function LogoTicker() {
  const duplicatedUniversities = [...universities, ...universities];

  return (
    <section className="bg-[#F9F8F4] py-12 border-y border-[#0A192F]/10 overflow-hidden">
      <div className="text-center mb-6">
        <p className="text-[#0A192F]/60 text-sm md:text-base font-medium tracking-wide">
          Our students have been admitted to:
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedUniversities.map((uni, index) => (
            <div key={`${uni}-${index}`} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
              <span 
                className="text-lg md:text-xl font-semibold text-[#0A192F]/70 whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {uni}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}