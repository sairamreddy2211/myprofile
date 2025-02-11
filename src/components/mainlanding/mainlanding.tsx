import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import { sections, colors } from '../../constants/theme';
import { Navigation } from '../Navigation/Navigation';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Education } from '../Education/Education';
import About from '../About/About';
import { DataClass } from '@/data/education';
import { useNavigate } from 'react-router-dom';

export default function MainLanding() {
    const [currentSection, setCurrentSection] = useState('about');
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollXProgress } = useScroll({
        container: containerRef
    });
    const navigate = useNavigate();
  
    useEffect(() => {
      if (DataClass.isrefresh) {
        navigate('/');
      }
    }, []); 

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className="min-h-screen bg-background text-text"
            style={{ background: colors.background }}
        >
            <>
                <ProgressBar progress={scrollXProgress} />

                <div
                    ref={containerRef}
                    className="h-screen w-full overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
                >
                    <div className="flex">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="snap-start flex-shrink-0 w-screen h-full flex items-center justify-center"
                            >
                                {section.id === 'education' && <Education />}
                                {section.id === 'about' && <About />}
                                {section.id === 'experience' && <About />}
                                {section.id === 'projects' && <About />}
                                {section.id === 'tech-stack' && <About />}
                                {section.id === 'achievements' && <About />}
                                {/* Add other section components here */}
                            </div>
                        ))}
                    </div>
                </div>

                <Navigation
                    currentSection={currentSection}
                    onNavigate={(id) => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                />
            </>
        </div>
    );
}