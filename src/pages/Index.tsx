import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsSection from "@/components/ProjectsSection";
import ManagementBlock from "@/components/ManagementBlock";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsGrid />
      <ProjectsSection />
      <ManagementBlock />
      <Footer />
    </div>
  );
};

export default Index;
