import React from "react";
import { images } from "../../constants";
import TextButton from "../../shared/ui/TextButton";
import AnimationSection from "../AnimationSection";
import Contact from "./Contact/Contact";

const ContactUs = () => {
  return (
    <div className="relative container block mx-auto xl:w-full h-auto overflow-hidden mb-[200px] w-[90%] ">
      <div className="absolute rounded-3xl  w-full top-0 left-0 right-0 block m-auto">
        <span className="w-full h-full absolute top-0 left-0 right-0 m-auto block">
          <img
            className="absolute z-[-1] left-0 right-0 top-0 block m-auto rounded-3xl"
            src={images.blur19}
            alt=""
          />
        </span>
        <span className="w-full h-full absolute top-0 left-0 right-0 m-auto block">
          <img
            className="absolute z-[-1] left-0 right-0 top-0 block m-auto rounded-3xl"
            src={images.blur20}
            alt=""
          />
        </span>
      </div>
      <div className="absolute rounded-3xl z-[-10] left-0 top-[-18%] right-0 block m-auto">
        <AnimationSection rounded={false} isShow={false} />
        <div className="absolute top-[-65%] z-[-1] left-0 right-0 m-auto md:w-[925px] aspect-square  ">
          <img className="w-full h-full" src={images.blur15} alt="" />
        </div>
      </div>

      <div className="mt-[160px]">
        <TextButton text={"Need Any Help?"} classes="w-[170px]  mb-5" />
        <h1 className="text-[38px] md:text-[48px] leading-[58px] font-extrabold text-center text-white ">
          Contact With Us
        </h1>
        <p className="text-[14px] md:text-[16px] text-pColor leading-[24px] font-medium md:w-[60%] text-center m-auto pb-10 pt-5 ">
          Build SaaS AI applications using OpenAI and Next.js, this kit comes
          with pre-configured and pre-built examples, making it easier to
          quickly kickstart your AI startup.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactUs;
