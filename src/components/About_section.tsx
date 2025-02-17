// src/components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  const technologies = [
    ['Angular', 'React',"React Native"],
    ['TS/JS (ES6+)', 'HTML/CSS SCSS'],
    ['Android (kotlin)', 'Flutter',".NET"],
    ['Node.js', 'MongoDB',"PostgreSQL"],
    ['PWA', 'Module Federation'],
  ];

  return (
    <section id="about" className="min-h-screen bg-[#0a192f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-[#64ffda] text-xl">01.</span>
          <h2 className="font-calibre text-[32px] text-slate-300 font-semibold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column with text content */}

        <div className="relative group">
            <div className="relative rounded-lg overflow-hidden bg-[#64ffda] bg-opacity-10 w-full max-w-[320px] mx-auto">
              <img
                src={`${import.meta.env.BASE_URL}spiderman.png`}  
                alt="Profile"
                className="w-full h-auto rounded-lg mix-blend-multiply filter grayscale contrast-100 hover:filter-none hover:mix-blend-normal transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#64ffda] opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </div>
          {/* right column with text content */}
          <div className="space-y-6">
            <p className="font-calibre text-[17px] text-slate-300">
              Hi! I'm a Frontend Developer based in Bangalore, with a unique journey that began through ethical hacking experiments.
            </p>

            <p className="font-calibre text-[17px] text-slate-400">
              Currently, I'm specializing in financial applications and PWA development at{' '}
              <a href="#" className="text-[#64ffda] hover:underline">Bajaj FinServ</a>
              , where I craft solutions that impact millions of users daily. My framework-agnostic 
              approach combined with full-stack capabilities allows me to create scalable 
              architectures and excellent user experiences.
            </p>

            <div className="pt-4">
              <p className="font-calibre text-[17px] text-slate-300 mb-3">
                Here are a few technologies I've been working with recently:
              </p>
              
              <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                {technologies.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((tech, techIndex) => (
                      <div key={`${rowIndex}-${techIndex}`} className="flex items-center gap-2">
                        <span className="text-[#64ffda]">▹</span>
                        <span className="font-mono text-sm text-slate-400">{tech}</span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right column with image */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;