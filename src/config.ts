// constants.ts
export const SOCIAL_ICONS = {
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    email: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
};

/** Resume file in public/resumes/. Change fileName when you add or rename your resume. */
export const RESUME_DOWNLOAD = {
  /** Filename of the resume in the public/resumes/ folder */
  fileName: "Sai_Ram_Reddy_Resume (5).pdf",
  /** Optional: name used when saving the file (defaults to fileName if not set) */
  downloadAs: "Sai_Ram_Reddy_Resume.pdf",
};

export const LANDING_SECTION_DATA = {
    greeting: {
        preTitle: "Hi, my name is",
        name: "Sai.",
        fullname: "Sai Ram Reddy",
        title: "Full Stack .NET / Angular Engineer",
        emoji: {
            symbol: "⚡",
            ariaLabel: "lightning"
        }
    },
    description: "Full Stack Software Engineer with 4.5+ years of experience building enterprise applications with Angular, TypeScript, and .NET Core / C#, with additional exposure to React and Next.js. Proven track record on large-scale fintech platforms serving 50M+ users, including a ~60% improvement in application load performance and the migration of a native Android sales application to a PWA for 70,000+ employees.",
    socialLinks: {
        github: {
            url: "",
            ariaLabel: "GitHub Profile"
        },
        linkedin: {
            url: "https://www.linkedin.com/in/sai-rama-reddy-padala",
            ariaLabel: "LinkedIn Profile"
        },
        email: {
            address: "sairamreddy2211@gmail.com",
            ariaLabel: "Email Contact"
        }
    }
};

export const navItems = {
    iconLogo: "S",
    navItems: [
        { number: '01.', text: 'About' },
        { number: '02.', text: 'Skill' },
        { number: '03.', text: 'Experience' },
        { number: '04.', text: 'Work' },
        { number: '05.', text: 'Recognition' },
        { number: '06.', text: 'Contact' },
    ]
};

export const ABOUT_SECTION_DATA = {
    sectionNumber: "01",
    title: "About Me",
    imagePath: "mypic.jpeg",
    imageAlt: "Sai Ram Reddy",
    paragraphs: [
        "I'm a Full Stack Software Engineer with 4.5+ years of experience designing and building scalable applications using Angular, TypeScript, and .NET Core / C#, with additional exposure to React and Next.js. I work across REST API development, Entity Framework Core, micro frontends (Module Federation), PWA architecture, and application security (JWT, CSRF, encryption). I've also built GenAI-powered internal tools using LangChain and Gemini.",
        "Currently, as an SDE II at <a href='https://www.rts.com/' class='text-site-accent hover:underline'>Revenue Technology Services (RTS)</a> in Bangalore, I contribute to airline cargo management systems built on .NET Core and Angular 19. Previously at Bajaj Finserv, I built enterprise-grade applications for a consumer fintech platform used by over 50 million users, led a ~60% load-time improvement, and migrated a native Android sales app to a PWA for 70,000+ employees. I'm passionate about building reliable, scalable full-stack platforms and solving engineering challenges that span both frontend and backend."
    ]
};

export const skilleducation = {
    sectionNumber: "02.",
    sectionName: "Skills & Education",
    education: {
        schools: [
            {
                name: "VIT University, Vellore",
                degree: "B.Tech in Computer Science and Engineering, Specialization: Information Security",
                date: "2018 – 2022",
                location: "Vellore, India",
                cgpa: "8.26/10"
            }
        ]
    },
    skillCategories: [
        {
            icon: "💻",
            title: "Frontend",
            description: "Angular (v2–19), React, Next.js, TypeScript, JavaScript, RxJS, NgRx"
        },
        {
            icon: "⚙️",
            title: "Backend",
            description: ".NET Core, C#, ASP.NET Core, Entity Framework / EF Core, Node.js, Express.js, REST APIs"
        },
        {
            icon: "🛢️",
            title: "Database",
            description: "SQL Server, MongoDB"
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            description: "Azure, Docker, CI/CD, Git"
        },
        {
            icon: "🔧",
            title: "Architecture",
            description: "PWA, WebSockets, SignalR, Module Federation / Micro Frontends"
        },
        {
            icon: "🔒",
            title: "Security",
            description: "JWT, OAuth, CSRF Protection, Encryption"
        },
        {
            icon: "🤖",
            title: "AI / GenAI",
            description: "LangChain, RAG, Gemini, TensorFlow.js"
        },
        {
            icon: "🎨",
            title: "Styling",
            description: "Tailwind CSS, SCSS"
        },
        {
            icon: "🌐",
            title: "Languages",
            description: "English — Professional · Telugu — Native · Hindi — Intermediate"
        }
    ]
};

export const experiences = {
    sectionNumber: "03.",
    sectionName: "Where I've Worked",
    experiences: [
        {
            company: "Revenue Technology Services (RTS)",
            link: "https://www.rts.com/",
            role: "SDE II",
            date: "November 2025 – Present",
            startDate: new Date('2025-11-01'),
            endDate: new Date(),
            highlights: [
                "Contributing to airline cargo management systems using .NET Core Web APIs and Angular 19, supporting applications including Velocity, AcceleRate, and Foresight.",
                "Built Angular standalone components for real-time flight tracking, cargo allotment, and operational dashboards using Kendo UI, improving visibility into day-to-day operations.",
                "Developed modular backend services and REST APIs, including stored procedures on SQL Server, to process large cargo datasets with Kafka and MongoDB in the data pipeline.",
                "Contributed to a shared component library of reusable form controls (search, upload, validation) used across multiple applications, improving consistency and development speed.",
                "Collaborated cross-functionally with product and operations teams to streamline cargo data processing and support faster, data-driven decisions."
            ]
        },
        {
            company: "Bajaj Finserv",
            link: "https://www.bajajfinserv.in/",
            role: "Senior Software Engineer",
            date: "February 2023 – October 2025",
            startDate: new Date('2023-02-01'),
            endDate: new Date('2025-10-31'),
            highlights: [
                "Built Angular 19 frontends with a .NET Core / C# backend (REST APIs, Entity Framework Core) for a consumer fintech application serving 50M+ users, using NgRx for state management.",
                "Improved homepage and application load performance by ~60% through lazy loading, Angular route reuse strategy, API caching, IndexedDB-based client-side caching, and rendering optimizations.",
                "Led the migration of the SalesOne native Android application to a PWA for 70,000+ sales employees, engineering a two-way PWA ↔ Android/WebView JavaScript bridge for seamless interop.",
                "Delivered core product modules including Gold Loan, Document Centre, IRCTC, FD services, and Rewards, alongside internal tools such as the Engineering CRM, Employee360, and API Monitoring dashboards.",
                "Implemented real-time features using WebSockets and SignalR, and adopted Module Federation / micro frontends to scale the frontend architecture across teams.",
                "Strengthened application security with JWT authentication, encryption, CSRF protection, and SQL injection prevention across API integrations.",
                "Built an AI-powered internal office policy assistant using Gemini, LangChain, and RAG with streaming socket responses, and a TensorFlow.js-based toxicity detection tool.",
                "Set up CI/CD pipelines on Azure, reducing deployment time by ~40%."
            ]
        },
        {
            company: "epikindifi",
            link: "https://www.epikindifi.com/",
            role: "Full-stack Developer",
            date: "January 2022 – November 2022",
            startDate: new Date('2022-01-01'),
            endDate: new Date('2022-11-30'),
            highlights: [
                "Built a banking application for Yoma Bank using Angular and React frontends with a Node.js/Express and .NET Core backend.",
                "Developed a React Native mobile app and Angular web application in TypeScript, sharing reactive forms and validation logic across platforms.",
                "Created reusable Angular and React component libraries to maintain consistent design patterns across web and mobile.",
                "Built secure APIs using Node.js/Express and .NET Core with Entity Framework, implementing JWT authentication and custom middleware."
            ]
        }
    ]
};

export const projects = {
    sectionNumber: "04.",
    sectionName: "Key Work & Projects",
    projects: [
        {
            title: "ODC Dashboard",
            description: "AI-powered application with React/Angular frontends and a .NET Core backend featuring a LangChain + Gemini chatbot.",
            tech: ["React", "Angular", ".NET Core", "LangChain", "Gemini"]
        },
        {
            title: "RAG AI Assistant",
            description: "Next.js 14 and Angular frontends powered by a LangChain RAG pipeline.",
            tech: ["Next.js 14", "Angular", "LangChain", "RAG"]
        },
        {
            title: "PipeCode LMS",
            description: "Open-source LMS with React and Angular micro-frontends on a .NET Core microservices architecture.",
            tech: ["React", "Angular", ".NET Core", "Micro-frontends"]
        },
        {
            title: "Roo Code",
            description: "Contributed to Roo Code, a GitHub Copilot-like tool built with Next.js, TypeScript, and React; implemented Mermaid diagram rendering with retry mechanisms and error handling.",
            tech: ["Next.js", "TypeScript", "React", "Mermaid"]
        }
    ]
};

export const achievements = {
    competitions: [
        {
            title: "Spot Award – Innovative Star, Prodigy Award, Heroes Award, and Kudos Award",
            subtitle: "Bajaj Finserv — full-stack Angular/.NET delivery and frontend innovation"
        },
        {
            title: "CTF Finalist – Top 30",
            subtitle: "Bajaj Group cybersecurity challenge (web security focus)"
        },
        {
            title: "1st Prize – Duothon Hackathon",
            subtitle: "Full-stack development · 3rd Prize – 7-Minute Plank Challenge"
        }
    ],
    certifications: [
        {
            title: "React Complete Guide",
            subtitle: "Udemy"
        },
        {
            title: "Angular Complete Guide",
            subtitle: "Udemy"
        },
        {
            title: "Next.js 14 Masterclass",
            subtitle: "Udemy"
        },
        {
            title: ".NET Core Web Development",
            subtitle: "Microsoft Learn"
        },
        {
            title: "Full Stack Development",
            subtitle: "EC-Council"
        }
    ],
    philanthropy: []
};

export const CONTACT_SECTION_DATA = {
    sectionNumber: "06",
    title: "What's Next?",
    subtitle: "Get In Touch",
    description: "I'm always open to discussing new opportunities, innovative full-stack platforms, or engineering challenges that span frontend and backend. Feel free to reach out!",
    contactInfo: {
        email: "sairamreddy2211@gmail.com",
        phone: "+91 79816 15426"
    },
    buttonText: "Say Hello"
};
