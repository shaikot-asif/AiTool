import React from "react";
import { images } from "../../constants";

const TextButton = ({ text, classes, parentClass }) => {
  return (
    <div>
      <p
        className={`${classes} flex gap-2 before:bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.11),_hsla(0,_0%,_100%,_0))] before:z-[-1] before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude]  relative  text-center m-auto bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.05),_hsla(0,_0%,_100%,_0))] rounded-full text-pColor font-medium text-sm py-2 px-4`}
      >
        {" "}
        <img src={images.iconTitle} alt="" /> {text}
      </p>
    </div>
  );
};

export default TextButton;
