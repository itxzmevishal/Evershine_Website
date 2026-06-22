import Hero from "../components/Hero";
import HeroSearch from "../components/HeroSearch";
import AboutPreview from "../components/AboutPreview";
import FeaturedProjects from "../components/FeaturedProjects";
import Associations from "../components/Associations";
import PressMedia from "../components/PressMedia";
import NriCorner from "../components/NriCorner";
import ContactCTA from "../components/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <HeroSearch />
      <AboutPreview />
      <FeaturedProjects />
      <Associations />
      <PressMedia />
      <NriCorner />
      <ContactCTA />
    </>
  );
}

export default Home;