import AboutSection from "@/components/About_section"
import AchievementsSection from "@/components/AchievementsSection"
import ConnectIcons from "@/components/ConnectIcons"
import ContactSection from "@/components/ContactSection"
import ExperienceSection from "@/components/ExperienceSection"
import Footer from "@/components/Footer"
import Landing_section from "@/components/landing_section"
import Navbar from "@/components/navbar"
import ProjectsGrid from "@/components/ProjectsGrid"


const Landing = () => {
    return (
        <div className="bg-[#0a192f] min-h-screen w-full overflow-hidden">
            <Navbar />
             <ConnectIcons/>
            <main className="px-5 md:px-[200px]">
                <Landing_section />
                <AboutSection />
                <ExperienceSection />
                <ProjectsGrid />
                <AchievementsSection />
                <ContactSection />
                <Footer />
            </main> 
        </div>
    )
}

export default Landing