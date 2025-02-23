// src/components/ExperienceSection.tsx
import React, { useState, useMemo } from 'react';
import CompanyTabs from './ui/CompanyTabs';
import { experiences } from '@/config';

const ExperienceSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const calculateTotalExperience = useMemo(() => {
    let totalMonths = 0;
    
    experiences.experiences.forEach(({ startDate, endDate }) => {
      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                    (endDate.getMonth() - startDate.getMonth());
      const days = endDate.getDate() - startDate.getDate();
      
      // Add the full months
      totalMonths += months;
      
      // Adjust for partial months based on days
      if (days > 15) totalMonths += 1;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years ? `${years} year${years > 1 ? 's' : ''}` : ''} ${months ? `${months} month${months > 1 ? 's' : ''}` : ''}`.trim();
  }, []);

  return (
    <section className="min-h-screen bg-[#0a192f] py-24 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#64ffda] text-xl">{experiences.sectionNumber}</span>
            <h2 className="font-calibre text-[22px] md:text-4xl text-slate-300 font-semibold">{experiences.sectionName}</h2>
            <div className="h-[1px] bg-slate-600 flex-grow ml-4"></div>
          </div>
          <p className="font-mono text-slate-400 text-sm mt-2 ">
            Total Experience: {calculateTotalExperience}
          </p>
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