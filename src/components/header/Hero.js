
import HeroContent from "./HeroContent";
import Navigation from "./Navigation";

const Hero = (props) => {
  return (
    <header className="hero">
      <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
      <Navigation />
      <HeroContent {...props} />
    </header>
  );
}

export default Hero;