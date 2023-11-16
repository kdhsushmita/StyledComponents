import HeroSection from "./HeroSection";

const About = () => {
  const data = {
    name: "sushmita",
    image: "./images/hero.jpg",
  };
  return (
    <div>
      <HeroSection {...data} />
    </div>
  );
};

export default About;
