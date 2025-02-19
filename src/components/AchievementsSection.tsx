import React from 'react';
import { Trophy, Award, HeartHandshake } from 'lucide-react';
import AchievementCard from './ui/AchievementCard';


const AchievementsSection = () => {

  const education = {
    schools: [
      {
        name: "Vellore Institute of Technology",
        degree: "Bachelor of Computer Science",
        date: "2018 - 2022",
        cgpa: "8.26",
        location: "Vellore, India",
        highlights: "Specialized in information Security"
      },
      // {
      //   name: "New Jersey Institute of Technology",
      //   degree: "Master of Computer Science",
      //   date: "2022 - 2024",
      //   cgpa: "3.4",
      //   location: "New Jersey, USA",
      //   highlights: "Graduate studies focusing on Cloud Computing and Distributed Systems"
      // },
    ]
  };

  const achievements = {
    competitions: [
      {
        title: "Prodigy Award",
        subtitle: "BFL CERTIFIED Prodigy",
        link:"https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_prodigyaward-webdevelopment-mobileappdevelopment-activity-7297865419078479873-4t_I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC7H7pYB5dv_kETF4QooM3oyyGvXdYIKw6Q"
      },
      {
        title: "Heroes Award Winner",
        subtitle: "BFL CERTIFIED 1st place",
        link:"https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_certificateofachievement-exceptionalperformance-activity-7123517787309805569-IEPQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC7H7pYB5dv_kETF4QooM3oyyGvXdYIKw6Q"
      },
      {
        title: "Kudos Award Winner",
        subtitle: "BFL CERTIFIED Recognition for Excellence",
        link:"https://www.linkedin.com/posts/sai-rama-reddy-padala-386a1a19a_certificateofachievement-exceptionalperformance-activity-7090257622511095808-DzH6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC7H7pYB5dv_kETF4QooM3oyyGvXdYIKw6Q"
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
        link:"https://www.udemy.com/certificate/UC-446c2a11-263b-4de8-a186-1efb3f580976/"
      },
      {
        title: "Python Ethical Hacking : Build tools for ethical hacking",
        subtitle: "Udemy",
        link:"https://www.udemy.com/certificate/UC-fd9dce4f-42c3-43f5-8d10-2e640ab210c7/"
      },
      {
        title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
        subtitle: "Udemy",
        link:"https://www.udemy.com/certificate/UC-8e2ae683-5a24-43ac-9c89-5e4c7802e7e1/"
      },
      {
        title: "The Complete Android 14 & Kotlin Development Masterclass",
        subtitle: "Udemy",
        link:"https://www.udemy.com/certificate/UC-33efff4b-c33e-4c0c-896b-52a99614c20f/"
      },
      // {
      //   title: "Web Development Masterclass - Online Certification Course",
      //   subtitle: "Udemy",
      //   link:"https://www.udemy.com/certificate/UC-ddeb6b0a-5b5c-4a16-9704-83aac8a52f84/"
      // },
      {
        title: "The Web Developer Bootcamp 2025",
        subtitle: "Udemy",
        link:"https://www.udemy.com/certificate/UC-01499b43-1544-41ae-9b9c-f132814771c0/"
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
        <h2 className="text-xl font-semibold text-gray-200 mb-8">EDUCATION</h2>
        {education.schools.map((school, index) => (
          <div key={index} className="group cursor-pointer mb-8">
            <div className="flex items-start gap-3 transform transition-transform duration-300 group-hover:translate-x-2">
              <span className="text-gray-400 group-hover:text-[#64ffda] text-lg">▹</span>
              <div>
                <h3 className="text-gray-200 text-lg font-medium group-hover:text-[#64ffda]">
                  {school.name}
                </h3>
                <div className="text-gray-400 text-sm mt-2 space-y-1">
                  <p className="font-medium">
                    {school.degree} | {school.date}
                  </p>
                  <p className="italic">
                    {school.location} • CGPA: {school.cgpa}
                  </p>
                  <p className="text-gray-500">
                    {school.highlights}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;