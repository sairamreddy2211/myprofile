// src/components/IntroSection.tsx
import React from 'react';
import ConnectIcons from './ConnectIcons';

const Landing_section: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 bg-[#0a192f]">
            <div className="space-y-5">
                <p className="font-mono text-[#00caf9] text-lg">Hi, my name is</p>

                <h1 className="font-calibre font-semibold text-7xl text-slate-300">
                    Sai Ram.
                </h1>

                <h2 className="flex items-center font-calibre font-bold text-6xl text-[#22ea4b]">
                    Spiderman of web
                    <span className="ml-4">
                        <span role="img" aria-label="spider" className="text-4xl">
                            🕷️
                        </span>
                    </span>
                </h2>

                <p className="font-calibre font-thin text-[20px] text-slate-300 max-w-[500px]">
                Hi! I'm a software engineer in Bangalore who went from ethically breaking websites to building them. Turns out, both skills came in handy – now I just get paid for the second one! 😄
                </p>
            </div>
        </section>
    );
};

export default Landing_section;