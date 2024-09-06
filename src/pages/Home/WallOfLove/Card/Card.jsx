import React from "react";
import { images } from "../../../../constants";

const Card = ({ image, name, userName, text, classes }) => {
  return (
    <div
      style={{ backgroundImage: `url(${images.blur18})` }}
      className={`${classes} bg-cover py-[34px] px-[30px] rounded-2xl relative before:content-[''] before:z-[-1] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.3),_hsla(0,_0%,_100%,_0)_28.19%)] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude]`}
    >
      <div className={` flex items-center gap-4 `}>
        <div className="w-[50px] h-[50px] ">
          <img className="w-full h-full rounded-full" src={image} alt={name} />
        </div>
        <div>
          <h3 className="font-medium text-[14px] leading-[20px] text-white ">
            {name}
          </h3>
          <p className="font-medium text-[14px] leading-[20px] text-pColor ">
            @{userName}
          </p>
        </div>
      </div>
      <div className="my-[25px] bg-[linear-gradient(10deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.12)_49.48%,_hsla(0,_0%,_100%,_0))]   h-[1px] w-full translate-y-1/2 rotate-[-90] lg:block lg:-translate-x-[-31.50%] "></div>

      <div>
        <p className="font-medium text-[16px] leading-[24px] text-pColor ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
