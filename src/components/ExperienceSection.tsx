// src/components/ExperienceSection.tsx
import React, { useState } from 'react';
import CompanyTabs from './ui/CompanyTabs';

const ExperienceSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const experiences = [
    {
      company: "Bajaj FinServ",
      link: "#",
      role: "Software Engineer",
      date: "Feb 2023 - Present",
      highlights: [
        "Developed comprehensive Gold Loan System enhancing user management capabilities",
        "Created Document Center for streamlined financial document access",
        "Optimized App Landing Page with advanced features like lazy loading and image caching",
        "Implemented 25 different loan calculators improving conversion rates",
        "Utilizing module federation and micro-frontend architecture for scalable solutions",
        "Tech Stack: Angular, React, PWA, Module Federation",
        "Impact: Serving over 50 million active users"
      ]
    },
    {
      company: "EPIKInDiFi",
      link: "#",
      role: "Frontend Developer",
      date: "July 2022 - Nov 2022",
      highlights: [
        "Created drag-and-drop interface for action building (call, mail, meet)",
        "Reduced development time from 2 months to 1 day",
        "Implemented generic APIs for seamless action integration",
        "Improved deployment efficiency by 90%",
        "Tech Stack: Web technologies, API integration"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-[#0a192f] py-24 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-[#64ffda] text-xl">02.</span>
          <h2 className="font-calibre text-[22px] md:text-4xl text-slate-300 font-semibold">Where I've Worked</h2>
          <div className="h-[1px] bg-slate-600 flex-grow ml-4"></div>
        </div>
        <div>
          <div>
          <CompanyTabs
          companies={experiences}
          selectedTab={selectedCompany}
          onTabSelect={setSelectedCompany}
        />
          </div>
          {/* <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-600">
                <div className="absolute left-[-9px] top-[12px] w-4 h-4 rounded-full bg-[#0a192f] border-2 border-[#64ffda]"></div>

                <div className="mb-2">
                  <h3 className="font-calibre text-2xl text-slate-300">
                    {exp.role}{' '}
                    <span className="text-[#64ffda]">
                      @ <a href={exp.link} className="hover:underline">{exp.company}</a>
                    </span>
                  </h3>
                  <p className="font-mono text-sm text-slate-400 mt-1">{exp.date}</p>
                </div>

                <ul className="space-y-4 mt-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <span className="text-[#64ffda] mt-1.5">▹</span>
                      <span className="font-calibre text-slate-400 text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;