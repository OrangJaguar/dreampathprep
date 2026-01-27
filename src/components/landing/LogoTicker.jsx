import React from 'react';

const universities = [
  { name: "Harvard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/800px-Harvard_University_coat_of_arms.svg.png" },
  { name: "Duke", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/800px-Duke_Blue_Devils_logo.svg.png" },
  { name: "Cornell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/800px-Cornell_University_seal.svg.png" },
  { name: "Georgia Tech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/800px-Georgia_Tech_seal.svg.png" },
  { name: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/800px-Seal_of_Leland_Stanford_Junior_University.svg.png" },
  { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/800px-MIT_logo.svg.png" },
  { name: "Yale", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/800px-Yale_University_Shield_1.svg.png" },
  { name: "Princeton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/800px-Princeton_seal.svg.png" },
];

export default function LogoTicker() {
  const duplicatedLogos = [...universities, ...universities];

  return (
    <section className="bg-[#F9F8F4] py-12 border-y border-[#0A192F]/10 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((uni, index) => (
            <div key={`${uni.name}-${index}`} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
              <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img src={uni.logo} alt={uni.name} className="max-h-full max-w-full object-contain" />
              </div>
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