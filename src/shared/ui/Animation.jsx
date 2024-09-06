import React from "react";
import { animation, animation2 } from "../../constants/animation";
import { motion } from "framer-motion";

const Animation = ({ star = true }) => {
  return (
    <div className="absolute top-4 left-0 right-0 m-auto container w-full md:w-[600px] overflow-hidden h-[350px]">
      {animation.map((item, index) => (
        <motion.div
          key={index}
          initial={{ translateY: item.translateY }}
          animate={{ translateY: [item.translateY, item.end] }}
          exit={{}}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatDelay: 0.01,
            delay: 0.1,
          }}
          style={{
            left: `${item.left}%`,
          }}
          className={`h-[1px] w-[1px] bg-white absolute right-0 z-[-1]`}
        ></motion.div>
      ))}

      {star &&
        animation2.map((item, index) => (
          <motion.div
            key={index}
            initial={{ translateY: item.translateY }}
            animate={{ translateY: [item.translateY, item.end] }}
            exit={{}}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatDelay: 0.01,
              delay: 0.1,
            }}
            style={{
              left: `${item.left}%`,
            }}
            className={`h-[2px] w-[2px] bg-white absolute right-0 z-[-1]`}
          ></motion.div>
        ))}
    </div>
  );
};

export default Animation;
