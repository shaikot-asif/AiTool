import React from "react";
import PricingButton from "../../shared/ui/PricingButton";

const NewsAndUpdate = () => {
  return (
    <div className="mb-[80px]">
      <div className="container m-auto px-[50.5px] flex  flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col lg:w-[45%] md:w-[48%] ">
          <h2 className="font-extrabold text-[28px]  leading-[38px]  text-white ">
            News & Update
          </h2>
          <p className="font-medium text-[16px] leading-[28px] text-pColor">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 lg:w-[45%] md:w-[48%] ">
          <input
            className="py-3 px-6 w-full text-pColor text-[16px] rounded-md bg-transparent border border-[hsla(0,_0%,_100%,_.12)] outline-none focus:border-[#6e25ed]  "
            placeholder="Enter your Email"
            type="email"
          />
          <PricingButton text={"Subscribe"} />
        </div>
      </div>
      <div className="mt-[55px] bg-[linear-gradient(10deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.12)_49.48%,_hsla(0,_0%,_100%,_0))]   h-[1px] w-full translate-y-1/2 rotate-[-90] lg:block lg:-translate-x-[-31.50%] "></div>
    </div>
  );
};

export default NewsAndUpdate;
