import { 
    User,           // For About
    Briefcase,      // For Experience
    Code,           // For Projects
    GraduationCap,  // For Education
    Trophy,         // For Achievements
    Wrench,         // For Skills
    Folder          // For Tech Stack
  } from 'lucide-react';
  
  // These sections appear after clicking "Explore My Journey"
export const sections = [
    { 
      id: 'about', 
      title: 'About Me',
      icon: User,
      description: 'Frontend Developer specializing in financial applications'
    },
    { 
      id: 'experience', 
      title: 'Experience',
      icon: Briefcase,
      description: 'My professional journey'
    },
    { 
      id: 'projects', 
      title: 'Projects',
      icon: Code,
      description: 'Featured work and side projects'
    },
    { 
      id: 'tech-stack', 
      title: 'Tech Stack',
      icon: Folder,
      description: 'Technologies I work with'
    },
    { 
      id: 'education', 
      title: 'Education',
      icon: GraduationCap,
      description: 'Academic background & certifications'
    },
    { 
      id: 'achievements', 
      title: 'Achievements',
      icon: Trophy,
      description: 'Awards and recognition'
    }
  ];
  // src/constants/theme.ts

export const colors = {
    background: "#161622",    // Primary dark blue
    accent: "#FF9C01",       // Orange for highlights and CTAs
    text: {
      primary: "#FFFFFF",    // Pure white for primary text
      secondary: "#E5E5E5",  // Slightly off-white for secondary text
      tertiary: "#9CA3AF",   // Grey for subtle text
    },
    surface: {
      primary: "#1E1E2D",    // Slightly lighter blue for cards/surfaces
      secondary: "#24242F",  // Even lighter blue for hover states
    }
  };
  
  // Common animation variants
  export const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    stagger: {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }
    }
  };