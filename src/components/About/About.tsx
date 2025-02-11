import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Terminal, Server, Cpu } from 'lucide-react';
import { colors } from '@/constants/theme';
import SwipeIndicator from '../SwipeIndicator';
import useBreakpoint from '@/hooks/useBreakpoint';

const About = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <div className={`min-h-screen w-screen flex items-center justify-center p-8 ${isMobile && 'mb-[80px]'}`}>
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {isMobile && <div className='flex justify-end pe-10'>
          <SwipeIndicator />
        </div>
        }
        {/* Left Column - Personal Info */}
        <div className="space-y-3">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold" style={{ color: colors.accent }}>
              About Me
            </h2>
            <p className="text-lg" style={{ color: colors.text.secondary }}>
              Frontend Developer with Full Stack Capabilities
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3" style={{ color: colors.text.secondary }}>
              <MapPin className="w-5 h-5" style={{ color: colors.accent }} />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-3" style={{ color: colors.text.secondary }}>
              <Mail className="w-5 h-5" style={{ color: colors.accent }} />
              <span>sairamreddy2211@gmail.com</span>
            </div>
            <div className="flex items-center gap-3" style={{ color: colors.text.secondary }}>
              <Phone className="w-5 h-5" style={{ color: colors.accent }} />
              <span>+91 7981615426</span>
            </div>
          </motion.div>

          {/* Tech Focus Areas */}
          <motion.div
            className="grid grid-cols-1 gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: colors.surface.primary }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-5 h-5" style={{ color: colors.accent }} />
                <h3 className="font-semibold" style={{ color: colors.text.primary }}>Frontend Expertise</h3>
              </div>
              <p style={{ color: colors.text.tertiary }}>
                Specializing in React, Angular, and modern web technologies with a focus on financial applications and PWAs.
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: colors.surface.primary }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5" style={{ color: colors.accent }} />
                <h3 className="font-semibold" style={{ color: colors.text.primary }}>Full Stack Capabilities</h3>
              </div>
              <p style={{ color: colors.text.tertiary }}>
                Experienced with Node.js, MongoDB, and various backend technologies to build complete solutions.
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: colors.surface.primary }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5" style={{ color: colors.accent }} />
                <h3 className="font-semibold" style={{ color: colors.text.primary }}>Innovation Focus</h3>
              </div>
              <p style={{ color: colors.text.tertiary }}>
                Working on integrating software with hardware to create real-world products and solutions for local businesses.
              </p>
            </div>
          </motion.div>
          {(isDesktop || isTablet) && <SwipeIndicator />}

        </div>

        {/* Right Column - Story */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >

          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: colors.surface.primary }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: colors.text.primary }}
            >
              My Journey
            </h3>
            <div className="space-y-4" style={{ color: colors.text.secondary }}>
              <p>
                Started with <mark className="bg-yellow-300/70 px-1">recreating social media login pages
                  for ethical hacking experiments</mark>, which sparked my passion for frontend development
                and API integration. This curiosity drove me to explore deeper into web technologies.
              </p>
              <p>
                <mark className="bg-yellow-300/70 px-1">Now at Bajaj FinServ, building financial
                  applications that impact millions of users daily.</mark> Developed key systems including
                Gold Loan Management and Document Center, significantly improving user experience.
              </p>
              <p>
                Currently developing an app for <mark className="bg-yellow-300/70 px-1">empowering local
                  vendors and student entrepreneurs</mark>. My vision extends beyond code – I'm passionate about
                creating integrated solutions that bridge software and hardware, focusing on real-world impact.
              </p>
            </div>

          </div>

          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: colors.surface.primary }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: colors.text.primary }}
            >
              Professional Focus
            </h3>
            <p style={{ color: colors.text.secondary }}>
              <mark className="bg-yellow-300/70 px-1">Specializing in financial technology with expertise
                in PWA development, module federation, and micro-frontend architecture.</mark> Framework-agnostic
              approach focused on core principles and scalable solutions.
            </p>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;