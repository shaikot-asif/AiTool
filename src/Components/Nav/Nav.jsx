import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

const navItem = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Docs", link: "#" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`${
        scrolled
          ? "bg-black border-b border-pColor backdrop-blur-sm"
          : "bg-transparent"
      } z-[9999] fixed top-0 left-0 right-0 opacity-90`}
    >
      <div
        className={` container mx-auto px-[50.5px]  flex flex-row justify-between align-middle items-center ${
          scrolled ? "py-4" : "py-6"
        } `}
      >
        <motion.div
          initial={{ translateY: 0 }}
          animate={{ translateY: [0, 3, -4, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 5,
            repeatType: "reverse",
          }}
        >
          <img src={images.logo} alt="Ai Tool" />
        </motion.div>
        <div>
          <ul className="flex gap-12 text-sm items-center align-middle justify-evenly">
            {navItem.map((item, index) => (
              <li key={index} className="text-center relative ">
                <a
                  className="font-normal text-pColor hover:text-white px-3 rounded-full hover:bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.09)_10.51%,_hsla(0,_0%,_100%,_0))]  py-1 hover:border-[#ffffff08] border-transparent border hover:before:content-[''] hover:before:h-[1px] before:w-[50%] before:absolute before:left-[25%] before:top-[-3px] before:bg-[linear-gradient(90deg,_hsla(0,_0%,_100%,_0)_2.56%,_hsla(0,_0%,_100%,_.4)_51.48%,_hsla(0,_0%,_100%,_0)_97.44%)]  "
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-6 items-center text-[#ffffffbf] font-normal text-sm relative">
          <a className="hover:text-pColor" href="#">
            Sign In
          </a>
          <a
            className="flex items-center gap-1 bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] [box-shadow:inset_0_-6px_17px_rgba(156,_178,_255,_.3),_inset_0_6px_17px_rgba(229,_156,_255,_.3)] hover:[box-shadow:inset_0_-3px_17px_rgba(156,_178,_255,_.3),_inset_0_9px_17px_rgba(229,_156,_255,_.3)]
            rounded-lg px-[18px] py-[6px] relative before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-[inherit]  before:bg-[linear-gradient(90deg,_rgba(229,_156,_255,_.45)_.01%,_rgba(186,_156,_255,_.45)_50.01%,_rgba(156,_178,_255,_.45))] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude] "
            href="#"
          >
            Sign Up
            <span className="text-[24px]">
              {" "}
              <BsArrowRightShort />{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
