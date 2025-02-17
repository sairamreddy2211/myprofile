// src/components/CompanyTabs.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Company {
  company: string;
  role: string;
  date: string;
  highlights: string[];
}

interface CompanyTabsProps {
  companies: Company[];
  selectedTab: number;
  onTabSelect: (index: number) => void;
}

const CompanyTabs: React.FC<CompanyTabsProps> = ({ 
  companies, 
  selectedTab, 
  onTabSelect 
}) => {
  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Vertical line for tabs */}
      <div className="relative h-fit">
        {/* Background line */}
        <div className="absolute left-0 w-[2px] h-full bg-slate-700/50" />
        
        {/* Animated highlight line */}
        <motion.div
          className="absolute left-0 w-[2px] bg-[#64ffda] hidden md:block"
          initial={{ height: `${100 / companies.length}%` }}
          animate={{
            y: `${selectedTab * 100}%`,
            height: `${100 / companies.length}%`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />

        {/* Company tabs */}
        <div className="flex flex-row md:flex-col overflow-scroll md:overflow-auto">
          {companies.map((company, index) => (
            <button
              key={company.company}
              className={`relative px-5 py-4 text-left min-w-max md:min-w-[240px] hover:bg-slate-700/20 transition-colors
                ${selectedTab === index ? 'bg-slate-800/50 text-[#64ffda]' : 'text-slate-400'}`}
              onClick={() => onTabSelect(index)}
            >
              <span className={`font-mono text-base ${selectedTab === index ? 'font-medium' : ''}`}>
                {company.company}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="md:ml-8 flex-1">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-2 mt-7 md:mt-0">
            <h3 className="font-calibre text-[15px] md:text-2xl text-slate-300">
              {companies[selectedTab].role}{' '}
              <span className="text-[#64ffda]">@ {companies[selectedTab].company}</span>
            </h3>
            <p className="font-mono text-sm text-slate-400 mt-1">
              {companies[selectedTab].date}
            </p>
          </div>

          <ul className="space-y-4 mt-4">
            {companies[selectedTab].highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1.5 text-[12px]">▹</span>
                <span className="font-calibre text-slate-400 text-lg text-[15px]">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyTabs;