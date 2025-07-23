// constants.ts
export const SOCIAL_ICONS = {
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    email: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
};

export const LANDING_SECTION_DATA = {
    greeting: {
        preTitle: "Hi, my name is",
        name: "Sai Ram.",
        fullname:"Sai Rama Reddy",
        title: "Full-stack Software Engineer",
        emoji: {
            symbol: "🚀",
            ariaLabel: "rocket"
        }
    },
    description: "I'm a full-stack software engineer with 3+ years of experience in architecting and developing scalable, secure, and high-performance applications. I specialize in Angular, React, Flutter, Node.js, and .NET technologies.",
    socialLinks: {
        github: {
            url: "https://github.com/sairamreddy2211",
            ariaLabel: "GitHub Profile"
        },
        linkedin: {
            url: "https://www.linkedin.com/in/sai-rama-reddy-padala-386a1a19a/",
            ariaLabel: "LinkedIn Profile"
        },
        email: {
            address: "sairamreddy2211@gmail.com",
            ariaLabel: "Email Contact"
        }
    }
};


export const navItems = { 
    iconLogo:"S", // this is the 1st  letter of person name
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
    imagePath: "spiderman.png",
    imageAlt: "Profile",
    paragraphs: [
        "I'm a full-stack software engineer with 3+ years of experience in architecting and developing scalable, secure, and high-performance applications. My expertise spans across modern web technologies, cloud solutions, and mobile development.",
        "Currently, as a Senior Software Engineer at <a href='https://www.bajajfinserv.in/' class='text-[#64ffda] hover:underline'>Bajaj FinServ</a>, I lead the development of enterprise-grade FinTech applications, focusing on performance optimization, security, and exceptional user experience. I'm passionate about GenAI, clean architecture, and creating impactful solutions that serve millions of users."
    ]
};

export const skilleducation = {
    sectionNumber: "02.",
    sectionName: "Skills & Education",
    education: {
        schools: [
            {
                name: "Vellore Institute of Technology ( VIT )",
                degree: "B.Tech in Computer Science and Engineering",
                date: "2018 - 2022",
                cgpa: "8.26",
                location: "Vellore, India",
                highlights: "Specialization: Information Security"
            }
        ]
    },
    skillCategories: [
        {
            icon: "💻",
            title: "Frontend Development",
            description: "Angular (up to v19), React, Next.js, NgRx, Redux, Tailwind CSS, SCSS, Bootstrap, Material-UI, PWA"
        },
        {
            icon: "🗄️",
            title: "Backend Development",
            description: "Node.js, Express.js, .NET Core, RESTful APIs, Microservices Architecture"
        },
        {
            icon: "📱",
            title: "Mobile Development",
            description: "React Native, Flutter, PWA with WebView integration"
        },
        {
            icon: "🛢️",
            title: "Databases",
            description: "MySQL, IndexedDB, NoSQL, MongoDB, Local/Session Storage"
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            description: "Azure, Docker, Git, CI/CD, Webpack"
        },
        {
            icon: "🛡️",
            title: "Security",
            description: "JWT, OAuth, CSRF Prevention, SQL Injection Mitigation, Encryption"
        },
        {
            icon: "🤖",
            title: "AI & Emerging Tech",
            description: "TensorFlow.js, WebSockets, WebRTC, Web Workers, VSCode Extensions"
        },
        {
            icon: "⌨️",
            title: "Programming Languages",
            description: "JavaScript, TypeScript, Python, C#, HTML5, CSS3"
        }
    ]
};

export const experiences = {
    sectionNumber: "03.",
    sectionName: "Where I've Worked",
    experiences: [
        {
            company: "Bajaj FinServ",
            link: "https://www.bajajfinserv.in/",
            role: "Senior Software Engineer",
            date: "Feb 2023 - Present",
            startDate: new Date('2023-02-01'),
            endDate: new Date(),
            highlights: [
                "Architected and maintained Angular 19-based CRM platforms with JWT auth, IndexedDB caching, and NgRx state management",
                "Built a Flutter-based internal tool with WebRTC video calling capability to enable faster face-to-face interactions between customer service agents and remote support teams",
                "Migrated legacy mobile app to PWA with WebView-JS bridge for 50M+ users, improving load speed by 60% and reducing crash rates",
                "Built enterprise-grade FinTech apps using Angular, RxJS, Tailwind, and lazy loading to optimize performance",
                "Developed real-time toxic content filtering using TensorFlow.js and AI models",
                "Led CI/CD automation pipelines and module federation setup to reduce deployment time by 40%",
                "Delivered Gold Loan/Document Centre modules, improving NPS by 35%",
                "Ensured 99.9% app uptime with efficient system design and scalable microservices",
                "Developed .NET-based backend services using clean architecture with encrypted API request/response, MSAL auth, and Azure Blob Storage integration"
            ]
        },
        {
            company: "epikindifi",
            link: "https://epikindifi.com/",
            role: "Frontend + Flutter Developer",
            date: "Jan 2022 - Nov 2022",
            startDate: new Date('2022-01-01'),
            endDate: new Date('2022-11-30'),
            highlights: [
                "Built unified frontend for Yoma Bank using Angular, React, and Flutter, delivering consistent UI/UX across platforms",
                "Developed reusable UI component library across mobile and web platforms",
                "Implemented key mobile banking flows using Flutter and ensured API integration across platforms",
                "Created backend APIs using Node.js/Express, integrating middleware, encryption, and MSAL authentication",
                "Worked with Azure Blob Storage to store secure customer documents",
                "Set up clean architecture in Flutter projects for scalable and maintainable development"
            ]
        }
    ]
};

export const projects = {
    sectionNumber: "04.",
    sectionName: "My Projects",
    projects: [
        {
            title: "RooCode 🤖",
            description: "Contributed to RooCode, a GitHub Copilot-like VSCode extension built on Next.js. Implemented retry mechanism for Mermaid diagrams and improved chat interface.",
            tech: ["Next.js", "TypeScript", "VSCode Extension API", "LLM Integration"],
            github: "https://github.com/RooCodeInc/Roo-Code",
            isOpenSource: true
        },
        {
            title: "ODC Dashboard 🤖",
            description: "AI-powered LangChain + Gemini chatbot with real-time streaming for dynamic interactions and intelligent responses.",
            tech: ["LangChain", "Gemini AI", "WebSockets", "Node.js", "React"],
            github: "#"
        },
        {
            title: "PipeCode LMS 📚",
            description: "Co-developing a modern open-source LMS inspired by Open edX, built with Angular micro-frontends architecture (private, will be public after initial setup).",
            tech: ["Angular", "Micro-frontends", "Module Federation", "TypeScript"],
            github: "#",
            isOpenSource: true
        },
        {
            title: "Memory Mapper 🎵",
            description: "Musical memory platform with Spotify integration for sharing personalized song maps and memories.",
            tech: ["React", "Spotify API", "Node.js", "MongoDB"],
            external: "https://www.pinenlime.com/memory-mapper"
        },
        {
            title: "Barter Hub 🔄",
            description: "Real-time cross-platform barter system enabling users to exchange goods without monetary transactions.",
            tech: ["React Native", "Firebase", "Real-time Database"],
            github: "https://github.com/sairamreddy2211/barter"
        },
        {
            title: "Business Decode 💡",
            description: "Platform connecting business students with shop owners for real-world problem-solving and entrepreneurship.",
            tech: ["React Native", "Firebase", ".NET"],
            github: "https://github.com/sairamreddy2211/Business_decode"
        },
        {
            title: "Code Play 🎮",
            description: "Real-time HTML/CSS/JS compiler using vanilla JavaScript with live preview functionality.",
            tech: ["JavaScript", "CodeMirror", "Web Workers"],
            github: "https://github.com/sairamreddy2211/html-css-js-compiler"
        },
        {
            title: "Video Call App 📹",
            description: "Flutter web app using WebRTC for real-time video calling across browsers with seamless connectivity.",
            tech: ["Flutter", "WebRTC", "WebSockets"],
            github: "#"
        }
    ]
};

export const achievements = {
    competitions: [
        {
            title: "Prodigy Award",
            subtitle: "Web and mobile innovation at Bajaj FinServ",
            link: "https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_prodigyaward-webdevelopment-mobileappdevelopment-activity-7297865419078479873-4t_I"
        },
        {
            title: "Heroes Award",
            subtitle: "Company-wide innovation contest winner",
            link: "https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_certificateofachievement-exceptionalperformance-activity-7123517787309805569-IEPQ"
        },
        {
            title: "Kudos Award",
            subtitle: "Recognized for outstanding delivery",
            link: "https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_certificateofachievement-exceptionalperformance-activity-7090257622511095808-DzH6"
        },
        {
            title: "Duothon Hackathon",
            subtitle: "1st Prize Winner"
        },
        {
            title: "7-minute Plank Challenge",
            subtitle: "3rd Prize Winner"
        },
        {
            title: "CTF Finalist",
            subtitle: "Top 30 in Bajaj Group cybersecurity challenge"
        }
    ],
    certifications: [
        {
            title: "Python Bootcamp",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-446c2a11-263b-4de8-a186-1efb3f580976/"
        },
        {
            title: "Ethical Hacking in Python",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-fd9dce4f-42c3-43f5-8d10-2e640ab210c7/"
        },
        {
            title: "React + Next.js 2025",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-8e2ae683-5a24-43ac-9c89-5e4c7802e7e1/"
        },
        {
            title: "Android Kotlin Masterclass",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-33efff4b-c33e-4c0c-896b-52a99614c20f/"
        },
        {
            title: "Web Development Bootcamp",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-01499b43-1544-41ae-9b9c-f132814771c0/"
        },
        {
            title: "Full Stack Development",
            subtitle: "EC-Council"
        }
    ],
    philanthropy: [
        {
            title: "Lead Organizer of a Blood Donation Drive",
            subtitle: "Oversaw close to 1000+ students actively participating in the Donation Drive which was organized at Sagar Hospitals, Bengaluru."
        },
        {
            title: "Development of Calamity Control",
            subtitle: "A project created at the nick of time to crowd-source disaster information and get a more detailed area-by-area view on the safezones of a calamity struck area."
        },
        {
            title: "Development of ChennaiRains.org",
            subtitle: "A crowd-sourced repository of information created overnight that was used at a time of dire need by many people stranded in the floods."
        }
    ]
};

export const CONTACT_SECTION_DATA = {
    sectionNumber: "06",
    title: "What's Next?",
    subtitle: "Get In Touch",
    description: "I'm always open to discussing new opportunities, innovative projects, or just having a friendly chat about technology and development. Feel free to reach out!",
    contactInfo: {
        email: "sairamreddy2211@gmail.com",
        phone: "+91 7981615426"
    },
    buttonText: "Say Hello"
};
