import React from 'react';
import { Trophy, Award, HeartHandshake } from 'lucide-react';
import AchievementCard from './ui/AchievementCard';
import { achievements } from '@/config';


const AchievementsSection = () => {



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

      
    </section>
  );
};  

export default AchievementsSection;