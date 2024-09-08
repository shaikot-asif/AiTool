import React from "react";
import { images } from "../../constants";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container m-auto px-[50.5px] flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2  lg:pr-[160px] xl:pr-[180px]">
          <img src={images.logo} alt="" />

          <p className="text-[16px] font-normal leading-[22px] py-10 text-pColor ">
            Build SaaS AI applications using OpenAI and Next.js, this kit comes
            with pre-configured and pre-built examples, making it easier to
            quickly kickstart your AI startup.
          </p>

          <div className="flex gap-5 items-center pb-5">
            <a className="text-[18px]" href="#">
              <FaFacebook />
            </a>
            <a className="text-[18px]" href="#">
              <FaGithub />
            </a>
            <a className="text-[18px]" href="#">
              <FaLinkedin />
            </a>
          </div>
          <p className="text-[16px] text-center lg:text-left font-normal leading-[22px]  text-pColor">
            All right reserved by{" "}
            <a
              className="font-semibold hover:underline"
              href="https://www.facebook.com/shaikotahmed.22.asif/"
              target={"_blank"}
            >
              Shaikot Ahmed Asif
            </a>
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-y-10 mt-10 lg:mt-0 md:flex-row justify-between">
          <div>
            <h4 className="font-semibold text-[16px] text-white">Products</h4>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <a className="hover:underline" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Integragion
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Changes log
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[16px] text-white">Products</h4>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <a className="hover:underline" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Integragion
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Changes log
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[16px] text-white">Products</h4>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <a className="hover:underline" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Integragion
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Changes log
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[1.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[3.24px] mb-4" />

        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[5.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[7.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[9.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[11.24px] mb-4" />
        <div className="bg-[linear-gradient(0deg,_hsla(0,_0%,_100%,_.1),_hsla(0,_0%,_100%,_0))] w-full h-[13.24px] mb-4" />
      </div>
    </div>
  );
};

export default Footer;
