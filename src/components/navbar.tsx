// src/components/Navbar.tsx
import React, { useState } from 'react';
import { motion, MotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import Hamburger from './ui/hamburger';

const Navbar: React.FC = () => {
  const navItems = [
    { number: '01.', text: 'About' },
    { number: '02.', text: 'Skill' },
    { number: '03.', text: 'Experience' },
    { number: '04.', text: 'Work' },
    { number: '05.', text: 'Recognition' },
    { number: '06.', text: 'Contact' },
  ];

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [opensidebar, setopensidebar] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide nav when scrolling down, show when scrolling up
    if (latest > prevScrollY && latest > 76) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setPrevScrollY(latest);
  });

  const handleScroll = (e, targetId) => {
    setopensidebar(!opensidebar)
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100, // Subtract navbar height + some padding
        behavior: 'smooth'
      });
    }
  };

  const handleClick = () => {
    setopensidebar(!opensidebar)
  }



  return (
    <motion.nav
      className="px-7 md:px-14 fixed w-full top-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm py-4 pt-10"
      animate={{
        y: hidden ? -100 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-[#00caf9] w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,5 95,25 95,75 50,95 5,75 5,25"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              />
              <text
                x="50"
                y="65"
                className="font-mono text-3xl"
                fill="currentColor"
                textAnchor="middle"
              >
                S
              </text>
            </svg>
          </a>
        </div>
        {/* 53 hamburger */}
        <div className='md:hidden z-[53]'>
          <Hamburger isclose={opensidebar} handleClick={handleClick} />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.text.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.text.toLowerCase())}
              className="group flex items-center text-slate-300 hover:text-[#00caf9] transition-colors"
            >
              <span className="font-mono text-sm text-[#00caf9] mr-1">
                {item.number}
              </span>
              <span className="font-calibre text-sm">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 52 nav items */}
      <motion.div
        className='md:hidden h-[120vh] bg-white fixed right-0 z-[52] top-0'
        animate={{
          x: opensidebar ? 0 : 200
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className='h-full w-full bg-[#152a45] w-[200px] px-10'>
          <div className="flex flex-col justify-between gap-7 pt-[150px]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.text.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.text.toLowerCase())}
                className="grouptext-slate-300 hover:text-[#00caf9] transition-colors"
              >
                <div className='flex flex-col items-center justify-center '>

                  <p className="font-mono text-lg text-[#00caf9]">
                    {item.number}
                  </p>
                  <p className="font-calibre text-lg text-white">
                    {item.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;