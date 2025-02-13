import React from 'react';
import { Trophy, Award, HeartHandshake } from 'lucide-react';
import AchievementCard from './ui/AchievementCard';


const AchievementsSection = () => {
  const achievements = {
    competitions: [
      {
        title: "Heroes Award Winner",
        subtitle: "1st Place"
      },
      {
        title: "Kudos Award Winner",
        subtitle: "Recognition for Excellence"
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
        title: "Applied CS with Android",
        subtitle: "Google"
      },
      {
        title: "The Complete React Native and Redux Course",
        subtitle: "Udemy"
      },
      {
        title: "Data Science & Machine Learning using Python",
        subtitle: "Udemy"
      },
      {
        title: "Dynamic Skills Integrated Program",
        subtitle: "DSI - Center for Innovation and Leadership"
      },
      {
        title: "Java - Level 1 & 2",
        subtitle: "Cambridge Certification Authority"
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

  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id='recognition'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Achievements Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-[#64ffda]" />
            <h2 className="text-xl font-semibold text-gray-200">ACHIEVEMENTS</h2>
          </div>
          {achievements.competitions.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>

        {/* Certifications Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-[#64ffda]" />
            <h2 className="text-xl font-semibold text-gray-200">CERTIFICATIONS</h2>
          </div>
          {achievements.certifications.map((cert, index) => (
            <AchievementCard key={index} {...cert} />
          ))}
        </div>

        {/* Philanthropy Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <HeartHandshake className="w-6 h-6 text-[#64ffda]" />
            <h2 className="text-xl font-semibold text-gray-200">PHILANTHROPY</h2>
          </div>
          {achievements.philanthropy.map((item, index) => (
            <AchievementCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">EDUCATION</h2>
        <div className="group cursor-pointer">
          <div className="flex items-start gap-2 transform transition-transform duration-300 group-hover:translate-x-2">
            <span className="text-gray-400 group-hover:text-[#64ffda]">▹</span>
            <div>
              <h3 className="text-gray-200 font-medium group-hover:text-[#64ffda]">
                Vellore Institute of Technology (VIT - Vellore)
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Bachelor's in computer science engineering with spl in Information Security - 8.08 CGPA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;