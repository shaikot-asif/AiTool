import React from "react";
import ContactUs from "../../Components/NeedAnyHelp/ContactUs";
import GetAccess from "./components/GetAccess/GetAccess";
import Hero from "./components/HeroSection/Hero";
import MainFeatures from "./components/MainFeature/MainFeatures";
import WallOfLove from "./WallOfLove/WallOfLove";

const Home = () => {
  return (
    <div>
      <Hero />
      <MainFeatures />
      <GetAccess />
      <WallOfLove />
      <ContactUs />
    </div>
  );
};

export default Home;
