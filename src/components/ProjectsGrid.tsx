import ProjectCard from "./ui/ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      title: "CodePlay 🎮",
      description: "Real-time HTML, CSS, and JavaScript compiler with live preview. Perfect for quick prototyping and code experimentation.",
      tech: ["React", "CodeMirror", "JavaScript"],
      github: "#"
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
      github: "#"
    },
    {
      title: "BarterHub 🔄",
      description: "Platform enabling users to exchange goods without money. Available as both web and mobile application.",
      tech: ["React Native", "Firebase", "React"],
      github: "#"
    },
    {
      title: "BeggingBits 😄",
      description: "Humorous web app about a developer's journey with witty animations and interactive elements.",
      tech: ["Flutter", "Firebase", "Animations"],
      github: "#"
    },
    {
      title: "BusinessDecode 💡",
      description: "Mobile app connecting business students with local shops to solve real-world challenges. A portfolio builder for aspiring entrepreneurs.",
      tech: ["React Native", "Firebase", ".NET"],
      github: "#"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="work">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-semibold text-gray-200">
          <span className="text-[#64ffda] font-mono text-xl mr-2">03.</span>
          Some Things I've Built
        </h2>
        <div className="flex-grow h-px bg-gray-700" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;