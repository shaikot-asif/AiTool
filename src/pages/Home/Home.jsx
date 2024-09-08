import React from "react";
import MainLayout from "../../Components/MainLayout";
import ContactUs from "../../Components/NeedAnyHelp/ContactUs";
import NewsAndUpdate from "../../Components/NewsAndUpdate/NewsAndUpdate";
import Blog from "./components/Blog/Blog";
import GetAccess from "./components/GetAccess/GetAccess";
import Hero from "./components/HeroSection/Hero";
import MainFeatures from "./components/MainFeature/MainFeatures";
import TryFree from "./components/TryFree/TryFree";
import WallOfLove from "./WallOfLove/WallOfLove";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <MainFeatures />
        <GetAccess />
        <WallOfLove />
        <ContactUs />
        <Blog />
        <TryFree />
        <NewsAndUpdate />
      </MainLayout>
    </div>
  );
};

export default Home;
