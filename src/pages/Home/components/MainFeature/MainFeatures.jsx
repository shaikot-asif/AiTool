import React from "react";
import { images } from "../../../../constants";
import {
  downFeatures,
  upSideFeatures,
} from "../../../../constants/mainFeatures";
import TextButton from "../../../../shared/ui/TextButton";
import MainFeaturesCard from "./CardComponent/MainFeaturesCard";

const MainFeatures = () => {
  return (
    <div className="container px-[34.5px] m-auto mb-12 relative">
      <div class=" hidden bg-[linear-gradient(270deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.12)_49.48%,_hsla(0,_0%,_100%,_0))] absolute left-1/2 md:left-[9.8%] top-1/2  h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:left-1/4 md:block lg:-translate-x-[31.50%] "></div>

      <div class="hidden bg-[linear-gradient(270deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.12)_49.48%,_hsla(0,_0%,_100%,_0))] absolute left-1/2 md:left-[40%] top-1/2  h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:left-1/4 md:block lg:-translate-x-[-31.50%] "></div>

      <div className="text-center">
        <TextButton text={"Main Features"} classes="w-[155px]" />
        <h1 className="text-[28px] leading-[38px] mt-[16px] mb-[18px] font-extrabold text-white ">
          Key Features of AI Tool
        </h1>
        <p className="font-medium leading-6 text-[14px] text-pColor ">
          A Complete Solution for AI SaaS Startups
        </p>
      </div>
      <div className="flex flex-col mt-10 gap-y-14 md:mt-0 md:gap-y-0 md:flex-row  relative">
        {upSideFeatures.map((item, index) => (
          <MainFeaturesCard
            image={item.icon}
            title={item.title}
            text={item.text}
            key={index}
          />
        ))}
      </div>

      <div className="flex flex-col gap-y-14 mt-10 md:mt-0 md:gap-y-0 md:flex-row  relative">
        {downFeatures.map((item, index) => (
          <MainFeaturesCard
            image={item.icon}
            title={item.title}
            text={item.text}
            key={index}
            classes="bg-[linear-gradient(360deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.05))]"
          />
        ))}
      </div>
      <div class="bg-[linear-gradient(10deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.12)_49.48%,_hsla(0,_0%,_100%,_0))] absolute left-0 top-[56%] md:top-[57.5%] xl:top-[58.8%] lg:top-[56.3%]  h-[1px] w-full translate-y-1/2 rotate-[-90] lg:block lg:-translate-x-[-31.50%] "></div>
    </div>
  );
};

export default MainFeatures;
