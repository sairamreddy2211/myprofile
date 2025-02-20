// constants.ts
export const SOCIAL_ICONS = {
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    email: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
};
// no need to paste above 

export const LANDING_SECTION_DATA = {
    greeting: {
        preTitle: "Hi, my name is",
        name: "Sai Ram.",
        fullname:"Sai Rama Reddy",
        title: "Spiderman of web",
        emoji: {
            symbol: "🕷️",
            ariaLabel: "spider"
        }
    },
    description: "Hi! I'm a software engineer in Bangalore who went from ethically breaking websites to building them. Turns out, both skills came in handy – now I just get paid for the second one! 😄",
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
        "Hi! I'm a Software Developer based in Bangalore, with a unique journey that began through ethical hacking experiments.",
        "Currently, I'm specializing in financial applications and PWA development at <a href='#' class='text-[#64ffda] hover:underline'>Bajaj FinServ</a>, where I craft solutions that impact millions of users daily. My framework-agnostic approach combined with full-stack capabilities allows me to create scalable architectures and excellent user experiences."
    ]
};

export const skilleducation = {
    sectionNumber: "02.",
    sectionName: "Skills & Education",
    education: {
        schools: [
            {
                name: "Vellore Institute of Technology",
                degree: "Bachelor of Computer Science",
                date: "2018 - 2022",
                cgpa: "8.26",
                location: "Vellore, India",
                highlights: "Specialized in information Security"
            }
        ]
    },
    skillCategories: [
        {
            icon: "🌐",
            title: "Web Technologies",
            description: "Angular, React, HTML/CSS/SCSS, Next.js, Bootstrap",
        },
        {
            icon: "💻",
            title: "Programming Languages",
            description: "JavaScript (ES6+), TypeScript, Python",
        },
        {
            icon: "📱",
            title: "Mobile Development",
            description: "React Native, Flutter, Android, Kotlin",
        },
        {
            icon: "🗄️",
            title: "Backend & Databases",
            description: "Node.js, .NET, MongoDB, PostgreSQL",
        },
        {
            icon: "🤖",
            title: "AI & Machine Learning",
            description: "Langchain, RAG, OpenAI, Gemini AI",
        },
        {
            icon: "🏗️",
            title: "Architecture",
            description: "PWA, Module Federation, Micro-Frontend, Scalable Design",
        },
        {
            icon: "👥",
            title: "Professional Skills",
            description: "Team Collaboration, Quick Learning, Time Management",
        },
        {
            icon: "🛠️",
            title: "Tools & Utilities",
            description: "VSCode, Git, Azure, Chrome DevTools, Swagger",
        },
    ]
};

export const experiences = {
    sectionNumber: "03.",
    sectionName: "Where I've Worked",
    experiences: [
        {
            company: "Bajaj FinServ",
            link: "#",
            role: "Software Engineer",
            date: "Feb 2023 - Present",
            highlights: [
                "Developed comprehensive Gold Loan System enhancing user management capabilities",
                "Created Document Center for streamlined financial document access",
                "Optimized App Landing Page with advanced features like lazy loading and image caching",
                "Implemented 25 different loan calculators improving conversion rates",
                "Utilizing module federation and micro-frontend architecture for scalable solutions",
                "Tech Stack: Angular, React, PWA, Module Federation",
                "Impact: Serving over 50 million active users"
            ]
        },
        {
            company: "EPIKInDiFi",
            link: "#",
            role: "Frontend Developer",
            date: "July 2022 - Nov 2022",
            highlights: [
                "Created drag-and-drop interface for action building (call, mail, meet)",
                "Reduced development time from 2 months to 1 day",
                "Implemented generic APIs for seamless action integration",
                "Improved deployment efficiency by 90%",
                "Tech Stack: Web technologies, API integration"
            ]
        }
    ]
};


export const projects = {
    sectionNumber: "04.",
    sectionName: "Where I've Worked",
    projects: [
        {
            title: "CodePlay 🎮",
            description: "Real-time HTML, CSS, and JavaScript compiler with live preview. Perfect for quick prototyping and code experimentation.",
            tech: ["React", "CodeMirror", "JavaScript"],
            github: "https://github.com/sairamreddy2211/html-css-js-compiler"
        },
        {
            title: "Memory Mapper 🎵",
            description: "Gift platform generating personalized maps with Spotify song QR codes and custom notes. Perfect for sharing musical memories.",
            tech: ["Wix", "JavaScript", "Spotify API", "Cron Jobs"],
            external: "https://www.pinenlime.com/memory-mapper"
        },
        // {
        //   title: "CSS Journey 🎨",
        //   description: "100 days of CSS challenges showcasing creative designs and animations. Each day brings a new visual experiment.",
        //   tech: ["HTML", "CSS", "JavaScript"],
        //   github: "#"
        // },
        {
            title: "BlogVerse ✍️",
            description: "Medium-inspired blogging platform where users can share and interact with articles.",
            tech: ["Node.js", "EJS", "MongoDB"],
            github: "https://github.com/sairamreddy2211/Blog"
        },
        {
            title: "BarterHub 🔄",
            description: "Platform enabling users to exchange goods without money. Available as both web and mobile application.",
            tech: ["React Native", "Firebase", "React"],
            github: "https://github.com/sairamreddy2211/barter"
        },
        {
            title: "BeggingBits 😄",
            description: "Humorous web app about a developer's journey with witty animations and interactive elements.",
            tech: ["Flutter", "Firebase", "Animations"],
            github: "https://github.com/sairamreddy2211/Begging"
        },
        {
            title: "BusinessDecode 💡",
            description: "Mobile app connecting business students with local shops to solve real-world challenges. A portfolio builder for aspiring entrepreneurs.",
            tech: ["React Native", "Firebase", ".NET"],
            github: "https://github.com/sairamreddy2211/Business_decode"
        }
    ]
};


export const achievements = {
    competitions: [
        {
            title: "Prodigy Award",
            subtitle: "BFL CERTIFIED Prodigy",
            link: "https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_prodigyaward-webdevelopment-mobileappdevelopment-activity-7297865419078479873-4t_I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC7H7pYB5dv_kETF4QooM3oyyGvXdYIKw6Q"
        },
        {
            title: "Heroes Award Winner",
            subtitle: "BFL CERTIFIED 1st place",
            link: "https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_certificateofachievement-exceptionalperformance-activity-7123517787309805569-IEPQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC7H7pYB5dv_kETF4QooM3oyyGvXdYIKw6Q"
        },
        {
            title: "Kudos Award Winner",
            subtitle: "BFL CERTIFIED Recognition for Excellence",
            link: "https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_certificateofachievement-exceptionalperformance-activity-7090257622511095808-DzH6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC7H7pYB5dv_kETF4QooM3oyyGvXdYIKw6Q"
        },
        {
            title: "Winner of Duothon",
            subtitle: "1st Place"
        },
        {
            title: "Planks Exercise Championship",
            subtitle: "3rd prize winner (7 minutes)"
        },
        {
            title: "Capture the Flag | Bajaj Group",
            subtitle: "Qualified in top 30 teams among all Bajaj Group companies"
        }
    ],
    certifications: [
        {
            title: "Master Complete Python Programming BootCamp",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-446c2a11-263b-4de8-a186-1efb3f580976/"
        },
        {
            title: "Python Ethical Hacking : Build tools for ethical hacking",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-fd9dce4f-42c3-43f5-8d10-2e640ab210c7/"
        },
        {
            title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-8e2ae683-5a24-43ac-9c89-5e4c7802e7e1/"
        },
        {
            title: "The Complete Android 14 & Kotlin Development Masterclass",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-33efff4b-c33e-4c0c-896b-52a99614c20f/"
        },
        // {
        //   title: "Web Development Masterclass - Online Certification Course",
        //   subtitle: "Udemy",
        //   link:"https://www.udemy.com/certificate/UC-ddeb6b0a-5b5c-4a16-9704-83aac8a52f84/"
        // },
        {
            title: "The Web Developer Bootcamp 2025",
            subtitle: "Udemy",
            link: "https://www.udemy.com/certificate/UC-01499b43-1544-41ae-9b9c-f132814771c0/"
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
    sectionNumber: "05",
    title: "What's Next?",
    subtitle: "Get In Touch",
    description: "Although I'm not currently looking for any new opportunities, because I am too busy to save the world. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    contactInfo: {
        email: "sairamreddy2211@gmail.com",
        phone: "+91 7981615426"
    },
    buttonText: "Alohomora"
};
