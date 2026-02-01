// src/components/AboutSection.tsx
import { ABOUT_SECTION_DATA } from '@/config';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-site-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-site-accent text-xl">{ABOUT_SECTION_DATA.sectionNumber}.</span>
          <h2 className="font-calibre text-[32px] text-slate-300 font-semibold">{ABOUT_SECTION_DATA.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column with image */}
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden bg-site-accent bg-opacity-10 w-full max-w-[320px] mx-auto">
              <img
                src={ABOUT_SECTION_DATA.imagePath.startsWith('http') ? ABOUT_SECTION_DATA.imagePath : `${import.meta.env.BASE_URL}${ABOUT_SECTION_DATA.imagePath}`}
                alt={ABOUT_SECTION_DATA.imageAlt}
                className="w-full h-auto rounded-lg hover:mix-blend-normal transition-all duration-300"
              />
              <div className="absolute inset-0 bg-site-accent opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-site-accent rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Right column with text content */}
          <div className="space-y-6">
            <p className="font-calibre text-[17px] text-slate-300">
              {ABOUT_SECTION_DATA.paragraphs[0]}
            </p>

            <p 
              className="font-calibre text-[17px] text-slate-400"
              dangerouslySetInnerHTML={{ __html: ABOUT_SECTION_DATA.paragraphs[1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;