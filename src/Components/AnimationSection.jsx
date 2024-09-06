import React from "react";
import { images } from "../constants";
import Animation from "../shared/ui/Animation";

const AnimationSection = ({ rounded = true, isShow = true }) => {
  return (
    <div>
      <div className="overflow-hidden">
        <Animation />
      </div>
      {isShow && (
        <div className="absolute top-0 md:top-[-20%] z-[-1] left-0 right-0 m-auto md:w-[925px] aspect-square ">
          <img className="w-full h-full" src={images.blur13} alt="" />
        </div>
      )}
      {isShow && (
        <div className="absolute top-0 z-[-1] left-0 right-0 m-auto md:w-[584px] aspect-square  ">
          <img className="w-full h-full" src={images.blur14} alt="" />
        </div>
      )}

      {isShow && (
        <div className="absolute top-[-15%] z-[-1] left-0 right-0 m-auto md:w-[925px] aspect-square  ">
          <img className="w-full h-full" src={images.blur15} alt="" />
        </div>
      )}

      {rounded && (
        <div className="bg-[#030014] rounded-full md:w-[830px] h-[830px]  absolute top-[170px] left-0 right-0 m-auto z-[-1] before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.3),_hsla(0,_0%,_100%,_0)_28.19%)] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude]  "></div>
      )}

      <div className="relative top-[55px] mb-[100px] z-[-2] flex justify-center gap-8">
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
        <div className="border-l border-r [border-image-source:linear-gradient(270deg,_hsla(0,_0%,_100%,_.075),_hsla(0,_0%,_100%,_0))] [border-image-slice:1]  bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.06))] opacity-[.3] h-[250px] w-full max-w-[50px]"></div>
      </div>
    </div>
  );
};

export default AnimationSection;
