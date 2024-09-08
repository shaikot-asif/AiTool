import React from "react";
import { images } from "../../constants";
import Button from "../../shared/ui/Button";
import TextButton from "../../shared/ui/TextButton";
import { motion } from "framer-motion";
import Animation from "../../shared/ui/Animation";

const TryOurToolFree = () => {
  return (
    <div className="relative h-auto  py-16 border border-[#ffffff4a] overflow-hidden rounded-2xl">
      <div className="text-center w-full mb-10 flex flex-col gap-4 ">
        <TextButton text={"try our tool for free"} classes="w-[190px]" />
        <h2 className="font-extrabold text-[28px] md:text-[48px] leading-[38px] md:leading-[58px] text-white ">
          What are you waiting for?
        </h2>
        <p className=" md:w-[60%] m-auto font-medium text-[16px] leading-[28px] text-pColor ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          eaque voluptatem soluta fugit totam numquam.
        </p>

        <Button text={"Get Started for free"} />
      </div>

      <div className="absolute top-[40%] left-0 right-0 m-auto z-[-1] ">
        <Animation />
      </div>

      <div className="absolute top-0 left-0 right-0 m-auto z-[-1] ">
        <motion.img
          initial={{ translateY: 0 }}
          animate={{ translateY: [0, 20, -20, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "reverse",
          }}
          className="absolute left-0 right-0 top-0 m-auto block "
          src={images.bigIcon}
          alt=""
        />
        <img
          className="absolute left-0 right-0 top-0 block m-auto"
          src={images.blur22}
          alt=""
        />

        <img
          className="absolute left-0 right-0 top-0 block m-auto"
          src={images.blur23}
          alt=""
        />

        <img
          className="absolute left-0 right-0 top-0 block m-auto"
          src={images.blur24}
          alt=""
        />
      </div>
    </div>
  );
};

export default TryOurToolFree;
