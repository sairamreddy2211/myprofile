import { LANDING_SECTION_DATA, SOCIAL_ICONS } from '@/config';
import React from 'react';
import { Download } from 'lucide-react';

const Landing_section: React.FC = () => {
    const { greeting, description, socialLinks } = LANDING_SECTION_DATA;

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 bg-[#0a192f]">
            <div className="space-y-5">
                <p className="font-mono text-[#00caf9] text-[13px] md:text-lg pt-16 md:pt-0">
                    {greeting.preTitle}
                </p>

                <h1 className="font-calibre font-semibold text-[40px] md:text-7xl text-slate-300">
                    {greeting.name}
                </h1>

                <h2 className="flex items-center font-calibre font-bold text-[40px] md:text-6xl text-[#22ea4b]">
                    {greeting.title}
                    <span className="ml-4">
                        <span role="img" aria-label={greeting.emoji.ariaLabel} className="text-4xl">
                            {greeting.emoji.symbol}
                        </span>
                    </span>
                </h2>

                <p className="font-calibre font-thin text-[18px] md:text-[20px] text-slate-300 max-w-[500px]">
                    {description}
                </p>

                <div className="flex items-center gap-6">
                   

                    <div className='flex gap-3 md:hidden'>
                        <a
                            href={socialLinks.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.github} />
                            </svg>
                        </a>
                        <a
                            href={socialLinks.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.linkedin} />
                            </svg>
                        </a>
                        <a
                            href={`mailto:${socialLinks.email.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.email} />
                            </svg>
                        </a>
                    </div>
                    <a
                        href={`${import.meta.env.BASE_URL}${"/resume.pdf"}`}
                        download="SaiRamReddy_Resume.pdf"
                        className="inline-flex items-center gap-2 rounded p-2 md:px-6 md:py-3 font-mono text-sm text-[#22ea4b] border border-[#22ea4b] rounded hover:bg-[#22ea4b] hover:bg-opacity-10 transition-all duration-300"
                    >
                        <Download size={16} />
                        <span className='hidden md:inline'>Download Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Landing_section;