import React from "react";

const PricingButton = ({ classes, text, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={`${classes} bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] hover:[box-shadow:inset_0_-3px_17px_rgba(156,_178,_255,_.3),_inset_0_9px_17px_rgba(229,_156,_255,_.3)]
            rounded-lg px-[18px] py-[6px] relative before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-[inherit]  before:bg-[linear-gradient(90deg,_rgba(229,_156,_255,_.45)_.01%,_rgba(186,_156,_255,_.45)_50.01%,_rgba(156,_178,_255,_.45))] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude]`}
      >
        {text}
      </button>
    </div>
  );
};

export default PricingButton;
