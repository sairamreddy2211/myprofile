// src/components/ExperienceSection.tsx
import React, { useState } from 'react';
import CompanyTabs from './ui/CompanyTabs';
import { experiences } from '@/config';

const ExperienceSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
    <section className="min-h-screen bg-[#0a192f] py-24 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-[#64ffda] text-xl">{experiences.sectionNumber}</span>
          <h2 className="font-calibre text-[22px] md:text-4xl text-slate-300 font-semibold">{experiences.sectionName}</h2>
          <div className="h-[1px] bg-slate-600 flex-grow ml-4"></div>
        </div>
        <div>
          <div>
            <CompanyTabs
              companies={experiences.experiences}
              selectedTab={selectedCompany}
              onTabSelect={setSelectedCompany}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;