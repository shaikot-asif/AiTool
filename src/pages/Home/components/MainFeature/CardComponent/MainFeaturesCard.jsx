import React from "react";

const MainFeaturesCard = ({ image, title, text, classes }) => {
  return (
    <div className="text-center [&>span]:hover:opacity-[1] py-5 px-3 lg:px-[60px] lg:py-[52px] md:w-[33.33%] relative">
      <span
        className={`absolute top-0 left-0 right-0 w-full h-full  ${
          classes
            ? classes
            : "bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.05))]"
        } opacity-0 transition-all z-[-1] duration-500  ]`}
      ></span>
      <div
        className="m-auto mb-[32px] bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.029),_hsla(0,_0%,_100%,_.06)_50%,_hsla(0,_0%,_100%,_0))] before:bg-[linear-gradient(90deg,_rgba(229,_156,_255,_.45)_.01%,_rgba(186,_156,_255,_.45)_50.01%,_rgba(156,_178,_255,_.45))] w-20 h-20 rounded-full flex justify-center items-center relative before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:z-[-1]  before:[mask-composite:exclude] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)]
   "
      >
        <img src={image} alt={title} />
      </div>
      <h3 className="font-semibold text-[16px] sm:text-[18px] leading-[28px] text-white mb-[16px]">
        {title}
      </h3>
      <p className="font-medium text-[14px] sm:text-[16px] leading-6 text-pColor ">
        {text}
      </p>
    </div>
  );
};

export default MainFeaturesCard;
