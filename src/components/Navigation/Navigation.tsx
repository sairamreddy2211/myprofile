import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { sections, colors } from '@/constants/theme';

interface NavigationProps {
  currentSection: string;
  onNavigate: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  // Tooltip animation
  const tooltipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`fixed bottom-8 flex justify-center w-full`}> 
      <motion.div 
        className="overflow-hidden rounded-full border-solid border-orange-500 border-[1px] shadow-lg z-50 backdrop-blur-sm"
        style={{ backgroundColor: `${colors.surface.primary}CC` }}  // CC for 80% opacity
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex gap-2 bg-slate-500 p-2 relative py-3">
          {sections.map((section) => (
            <div key={section.id} className="relative group">
              <Button
                variant={currentSection === section.id ? "default" : "ghost"}
                size="icon"
                onClick={() => onNavigate(section.id)}
                className={`rounded-full p-2 transition-all duration-300 ${
                  currentSection === section.id 
                    ? 'text-white scale-110' 
                    : 'hover:bg-accent/20'
                }`}
                style={{
                  borderColor: currentSection === section.id ? colors.accent : 'transparent',
                }}
              >
                {/* Icon */}
                <section.icon 
                  size={20} 
                  className={`transition-transform duration-300 ${
                    currentSection === section.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                />

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-md text-sm whitespace-nowrap"
                  style={{ 
                    backgroundColor: colors.surface.secondary,
                    color: colors.text.primary 
                  }}
                  initial="hidden"
                  animate="hidden"
                  variants={tooltipVariants}
                  whileHover="visible"
                  transition={{ duration: 0.2 }}
                >
                  {section.title}
                </motion.div>
              </Button>

              {/* Active indicator dot */}
              {currentSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: colors.accent }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navigation;