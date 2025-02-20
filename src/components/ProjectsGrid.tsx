import { projects } from "@/config";
import ProjectCard from "./ui/ProjectCard";

const ProjectsGrid = () => {

  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="work">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-[22px] md:text-3xl font-semibold text-gray-200">
          <span className="text-[#64ffda] font-mono text-xl mr-2">{projects.sectionNumber}</span>
          {projects.sectionName}
        </h2>
        <div className="flex-grow h-px bg-gray-700" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;