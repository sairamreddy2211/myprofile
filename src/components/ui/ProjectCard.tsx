import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ title, description, tech, github, external }) => {
  return (
    <div className="bg-[#112240] rounded-lg p-8 hover:translate-y-[-5px] transition-transform">
      <div className="flex justify-between items-start mb-6">
        <Folder className="w-10 h-10 text-[#64ffda]" />
        <div className="flex gap-4">
          {github && (
            <a href={github} className="text-gray-300 hover:text-[#64ffda]">
              <Github className="w-6 h-6" />
            </a>
          )}
          {external && (
            <a href={external} className="text-gray-300 hover:text-[#64ffda]">
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tech.map((t, i) => (
          <span key={i} className="text-sm text-gray-400">{t}</span>
        ))}
      </div>
    </div>
  )
};

export default ProjectCard;