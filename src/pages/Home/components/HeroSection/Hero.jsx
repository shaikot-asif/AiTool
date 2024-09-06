import React from "react";
import { images } from "../../../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="container m-auto pt-[178px] text-center flex flex-col  ">
        <div className="sm:w-[70%] w-[95%] m-auto">
          <p className="flex gap-2 hover:[box-shadow:inset_0_-7px_11px_#a48fff3d] before:bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.11),_hsla(0,_0%,_100%,_0))] before:z-[-1] before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude]  relative w-[242px]  text-center m-auto bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.05),_hsla(0,_0%,_100%,_0))] rounded-full text-pColor font-medium text-sm py-2 px-4 mb-[20px] ">
            <img src={images.iconTitle} alt="" /> Launch Your Ai Startup With
          </p>
          <h1 className="text-white text-[28px] sm:text-4xl lg:text-6xl lg:leading-[72px] font-extrabold mb-[24px] ">
            OpenAI, React.js Saas Boilerplate and Starter Kits{" "}
          </h1>
          <p className="text-pColor lg:w-[50%] m-auto text-[18px] leading-[28px] font-medium mb-[36px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste
            facere rem itaque, quas, totam voluptates possimus exercitationem
            quod, laborum ullam unde omnis ex commodi? Lorem ipsum dolor sit
            amet.
          </p>
          <button className="px-5 py-3 mb-7 font-medium text-[16px] leading-6 bg-[linear-gradient(180deg,_#a073ee_-11.11%,_#6e25ed)] hover:opacity-80 transition-all duration-500 rounded-md">
            Try Ai Examples
          </button>
        </div>

        <AnimatePresence>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="w-full mt-10 mb-32 "
          >
            <img
              className="w-full md:w-[80%] m-auto"
              src={images.hero}
              alt=""
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="border-l border-r border-b border-[#918ea084] w-[94%] h-[1225px] absolute top-[-120%]  left-0 right-0 z-[-10] m-auto rounded-[100%]"></div>
      <div className="border-l border-r border-b border-[#918ea084] w-[82%] h-[1282px] absolute top-[-150%] left-0 right-0 z-[-10] m-auto rounded-[100%]"></div>
      {/* <img
        className="bg-cover absolute top-[0] left-0 right-0 w-[100%]  z-[-1] "
        src={images.blur}
        alt=""
      /> */}

      {/* <div
        className={`bg-cover bg-center h-screen absolute top-0 left-0 right-0 w-full m-auto bg-[url(${images.hero})]`}
      ></div> */}

      <div
        className="bg-cover bg-center h-screen absolute top-0 left-0 right-0 w-full z-[-10]"
        style={{ backgroundImage: `url(${images.blur})` }}
      ></div>
      <div
        className="bg-cover bg-center h-screen absolute top-0 left-0 right-0 w-full z-[-10]"
        style={{ backgroundImage: `url(${images.blur})` }}
      ></div>
    </div>
  );
};

export default Hero;
