

// src/components/SkillsSection/SkillsSection.tsx
import React from 'react';
import SkillCard from './ui/SkillCard';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="bg-[#0a192f] py-24 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-[#64ffda] text-xl">03.</span>
          <h2 className="font-calibre text-4xl text-slate-300 font-semibold">Skills</h2>
          <div className="h-[1px] bg-slate-600 flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;