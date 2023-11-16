import HeroSection from "./HeroSection";

const Home = () => {
  const data = {
    name: "home",
    image: "./images/hero.jpg",
  };
  return <HeroSection {...data} />;
};

export default Home;
