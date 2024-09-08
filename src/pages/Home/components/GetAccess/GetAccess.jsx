import React, { useState } from "react";
import AnimationSection from "../../../../Components/AnimationSection";

import TextButton from "../../../../shared/ui/TextButton";
import Pricing from "./Pricing/Pricing";

const GetAccess = () => {
  return (
    <div className="relative container m-auto px-4 lg:px-[50.5px]">
      <AnimationSection />
      <div className="mt-[60px]">
        <TextButton text={"Get access"} classes="w-[140px]  mb-5" />
        <h1 className="text-[38px] md:text-[48px] leading-[58px] font-extrabold text-center text-white ">
          Our Pricing Plan
        </h1>
        <p className="text-[14px] md:text-[16px] text-pColor leading-[24px] font-medium md:w-[60%] text-center m-auto pb-10 pt-5 ">
          Build SaaS AI applications using OpenAI and Next.js, this kit comes
          with pre-configured and pre-built examples, making it easier to
          quickly kickstart your AI startup.
        </p>
        <div className="flex flex-row flex-wrap xl:flex-nowrap justify-evenly  mb-[200px] gap-5">
          <Pricing classes={"md:w-[40%] w-full xl:w-1/3 "} />
          <Pricing classes={"md:w-[40%] w-full xl:w-1/3 "} />
          <Pricing classes={"md:w-[40%] w-full xl:w-1/3 "} />
        </div>
      </div>
    </div>
  );
};

export default GetAccess;
