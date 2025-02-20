import { skilleducation } from "@/config";

const SkillsSection = () => {

  return (
    <section id="skill" className="min-h-screen bg-[#0a192f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-calibre text-[25px] text-slate-300 font-semibold">
            <span className="font-mono text-[#64ffda] text-xl">{skilleducation.sectionNumber}</span>

            {skilleducation.sectionName}
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-10 mb-14">
          {skilleducation.skillCategories.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-lg group-hover:text-[#64ffda] transition-colors duration-300">
                  {skill.icon}
                </span>
                <h3 className="text-slate-200 font-semibold text-base group-hover:text-[#64ffda] transition-colors duration-300">
                  {skill.title}
                </h3>
              </div>
              <p className="text-slate-400 ml-8 text-[14px]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-14">
          <h3 className="text-base font-semibold text-[#64ffda] mb-6">EDUCATION</h3>
          {skilleducation.education.schools.map((school, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-start gap-3 transform transition-transform duration-300 group-hover:translate-x-2">
                <span className="text-[#64ffda] group-hover:text-[#64ffda] text-base">▹</span>
                <div>
                  <h4 className="text-slate-200 text-[15px] font-medium group-hover:text-[#64ffda]">
                    {school.name}
                  </h4>
                  <div className="text-slate-400 text-[14px] mt-2 space-y-1">
                    <p className="font-medium">
                      {school.degree} | {school.date}
                    </p>
                    <p className="italic">
                      {school.location} • CGPA: {school.cgpa}
                    </p>
                    <p className="text-slate-500">
                      {school.highlights}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;