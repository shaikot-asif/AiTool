import React from "react";
import { Link } from "react-router-dom";
const PageHeader = ({ pageName }) => {
  return (
    <div className="relative">
      <div className="my-[150px] ">
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[1.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[3.24px] mb-4" />

        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[5.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[7.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[9.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[11.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[13.24px] mb-4" />
      </div>

      <div className="absolute top-6 left-0 right-0 text-center">
        <h1 className="font-extrabold text-[28px] md:text-[48px] leading-[38px] md:leading-[58px] text-white ">
          {pageName}
        </h1>
        <p className="text-[16px] text-pColor mt-3 ">
          <Link to={"/"}>Home</Link> / {pageName}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
