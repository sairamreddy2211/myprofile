import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap } from 'lucide-react';
import { educationData } from '@/data/education';

export const Education: React.FC = () => {
  const [activeEdu, setActiveEdu] = useState(0);

  return (
    <motion.div 
      className="space-y-8 p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 text-accent">
        <GraduationCap size={32} />
        <h2 className="text-4xl font-bold">Education</h2>
      </div>
      
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
              activeEdu === index ? 'bg-secondary shadow-lg' : 'bg-secondary/50'
            }`}
            onClick={() => setActiveEdu(index)}
            whileHover={{ scale: 1.02 }}
            layout
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-accent">{edu.year}</h3>
                <h4 className="text-2xl font-bold text-text mt-2">{edu.degree}</h4>
                <p className="text-text/80 mt-1">{edu.institution}</p>
              </div>
              <ChevronRight 
                className={`transition-transform duration-300 ${
                  activeEdu === index ? 'rotate-90' : ''
                }`}
              />
            </div>
            
            <motion.div
              initial={false}
              animate={{ height: activeEdu === index ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              {activeEdu === index && (
                <div className="mt-4 space-y-2">
                  <p className="text-text/90">{edu.details}</p>
                  <ul className="list-disc list-inside text-text/80">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};