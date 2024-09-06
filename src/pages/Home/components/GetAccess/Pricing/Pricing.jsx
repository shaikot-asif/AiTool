import React from "react";
import { images } from "../../../../../constants";
import PricingButton from "../../../../../shared/ui/PricingButton";

const Pricing = ({ title, icon, money, arrOfTitle, classes }) => {
  return (
    <div
      className={`${classes} px-10 overflow-hidden rounded-2xl py-10 relative before:z-[-1] before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-[inherit]  before:bg-[linear-gradient(90deg,_rgba(229,_156,_255,_.45)_.01%,_rgba(186,_156,_255,_.45)_50.01%,_rgba(156,_178,_255,_.45))] before:[mask-image:linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px),_linear-gradient(rgb(255,_255,_255)_0px,_rgb(255,_255,_255)_0px)] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude]`}
    >
      <div className="overflow-hidden">
        <span className="absolute left-0 right-0 m-auto top-0 w-full z-[-1] ">
          <img className="w-full" src={images.blur17} alt="" />
        </span>

        <span className="absolute left-0 right-0 m-auto bottom-0 w-full z-[-1] ">
          <img className="w-full" src={images.blur16} alt="" />
        </span>
      </div>
      <div>
        <div className="flex justify-between mb-[22px] ">
          <h1 className="text-[24px] leading-[30px] font-semibold text-white ">
            Starter
          </h1>
          <img src={images.pricingIcon} alt="" />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 mb-[22px]">
          <h3 className="font-bold lg:w-[50%] text-[45px] leading-[55px] text-transparent bg-clip-text bg-[linear-gradient(0deg,_#e59cff_.01%,_#ba9cff_50.01%,_#9cb2ff),_linear-gradient(0deg,_hsla(0,_0%,_100%,_.4),_hsla(0,_0%,_100%,_.4))]  ">
            $ 100
          </h3>
          <span className="text-[16px] leading-[24px] font-medium text-pColor ">
            /month (billed annually)
          </span>
        </div>
        <div className="mb-[32px] bg-[linear-gradient(10deg,_hsla(0,_0%,_100%,_0),_hsla(0,_0%,_100%,_.12)_49.48%,_hsla(0,_0%,_100%,_0))]   h-[1px] w-full translate-y-1/2 rotate-[-90] lg:block lg:-translate-x-[-31.50%] "></div>
        <div>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-4 text-[16px] leading-[24px] font-medium text-pColor ">
              {" "}
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_67_11301)">
                    <path
                      d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12Z"
                      fill="url(#paint0_linear_67_11301)"
                      fillOpacity="0.08"
                    ></path>
                    <g filter="url(#filter0_d_67_11301)">
                      <path
                        d="M12.5 9L15.5 12L12.5 15L9.5 12L12.5 9Z"
                        fill="#F3EEFF"
                      ></path>
                    </g>
                    <path
                      d="M24 12C24 5.64873 18.8513 0.5 12.5 0.5C6.14873 0.5 1 5.64873 1 12C1 18.3513 6.14873 23.5 12.5 23.5C18.8513 23.5 24 18.3513 24 12Z"
                      stroke="#F3EEFF"
                      strokeOpacity="0.06"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_67_11301"
                      x="3.5"
                      y="3"
                      width="18"
                      height="18"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_67_11301"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_67_11301"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_67_11301"
                      x1="12.5"
                      y1="0"
                      x2="12.5"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3EEFF" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#F3EEFF"></stop>
                    </linearGradient>
                    <clipPath id="clip0_67_11301">
                      <rect width="25" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              Subscription with levels
            </li>
            <li className="flex gap-4 text-[16px] leading-[24px] font-medium text-pColor ">
              {" "}
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_67_11301)">
                    <path
                      d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12Z"
                      fill="url(#paint0_linear_67_11301)"
                      fillOpacity="0.08"
                    ></path>
                    <g filter="url(#filter0_d_67_11301)">
                      <path
                        d="M12.5 9L15.5 12L12.5 15L9.5 12L12.5 9Z"
                        fill="#F3EEFF"
                      ></path>
                    </g>
                    <path
                      d="M24 12C24 5.64873 18.8513 0.5 12.5 0.5C6.14873 0.5 1 5.64873 1 12C1 18.3513 6.14873 23.5 12.5 23.5C18.8513 23.5 24 18.3513 24 12Z"
                      stroke="#F3EEFF"
                      strokeOpacity="0.06"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_67_11301"
                      x="3.5"
                      y="3"
                      width="18"
                      height="18"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_67_11301"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_67_11301"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_67_11301"
                      x1="12.5"
                      y1="0"
                      x2="12.5"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3EEFF" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#F3EEFF"></stop>
                    </linearGradient>
                    <clipPath id="clip0_67_11301">
                      <rect width="25" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              Subscription with levels
            </li>
            <li className="flex gap-4 text-[16px] leading-[24px] font-medium text-pColor ">
              {" "}
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_67_11301)">
                    <path
                      d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12Z"
                      fill="url(#paint0_linear_67_11301)"
                      fillOpacity="0.08"
                    ></path>
                    <g filter="url(#filter0_d_67_11301)">
                      <path
                        d="M12.5 9L15.5 12L12.5 15L9.5 12L12.5 9Z"
                        fill="#F3EEFF"
                      ></path>
                    </g>
                    <path
                      d="M24 12C24 5.64873 18.8513 0.5 12.5 0.5C6.14873 0.5 1 5.64873 1 12C1 18.3513 6.14873 23.5 12.5 23.5C18.8513 23.5 24 18.3513 24 12Z"
                      stroke="#F3EEFF"
                      strokeOpacity="0.06"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_67_11301"
                      x="3.5"
                      y="3"
                      width="18"
                      height="18"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_67_11301"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_67_11301"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_67_11301"
                      x1="12.5"
                      y1="0"
                      x2="12.5"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3EEFF" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#F3EEFF"></stop>
                    </linearGradient>
                    <clipPath id="clip0_67_11301">
                      <rect width="25" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              Subscription with levels
            </li>

            <li className="flex gap-4 text-[16px] leading-[24px] font-medium text-pColor ">
              {" "}
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_67_11301)">
                    <path
                      d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12Z"
                      fill="url(#paint0_linear_67_11301)"
                      fillOpacity="0.08"
                    ></path>
                    <g filter="url(#filter0_d_67_11301)">
                      <path
                        d="M12.5 9L15.5 12L12.5 15L9.5 12L12.5 9Z"
                        fill="#F3EEFF"
                      ></path>
                    </g>
                    <path
                      d="M24 12C24 5.64873 18.8513 0.5 12.5 0.5C6.14873 0.5 1 5.64873 1 12C1 18.3513 6.14873 23.5 12.5 23.5C18.8513 23.5 24 18.3513 24 12Z"
                      stroke="#F3EEFF"
                      strokeOpacity="0.06"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_67_11301"
                      x="3.5"
                      y="3"
                      width="18"
                      height="18"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_67_11301"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_67_11301"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_67_11301"
                      x1="12.5"
                      y1="0"
                      x2="12.5"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3EEFF" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#F3EEFF"></stop>
                    </linearGradient>
                    <clipPath id="clip0_67_11301">
                      <rect width="25" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              Subscription with levels
            </li>

            <li className="flex gap-4 text-[16px] leading-[24px] font-medium text-pColor ">
              {" "}
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_67_11301)">
                    <path
                      d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12Z"
                      fill="url(#paint0_linear_67_11301)"
                      fillOpacity="0.08"
                    ></path>
                    <g filter="url(#filter0_d_67_11301)">
                      <path
                        d="M12.5 9L15.5 12L12.5 15L9.5 12L12.5 9Z"
                        fill="#F3EEFF"
                      ></path>
                    </g>
                    <path
                      d="M24 12C24 5.64873 18.8513 0.5 12.5 0.5C6.14873 0.5 1 5.64873 1 12C1 18.3513 6.14873 23.5 12.5 23.5C18.8513 23.5 24 18.3513 24 12Z"
                      stroke="#F3EEFF"
                      strokeOpacity="0.06"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_67_11301"
                      x="3.5"
                      y="3"
                      width="18"
                      height="18"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_67_11301"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_67_11301"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_67_11301"
                      x1="12.5"
                      y1="0"
                      x2="12.5"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3EEFF" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#F3EEFF"></stop>
                    </linearGradient>
                    <clipPath id="clip0_67_11301">
                      <rect width="25" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              Subscription with levels
            </li>
          </ul>

          <div className="mt-[44px] ">
            <PricingButton text={"Get the plan"} classes="w-full py-[14px]" />
            <p className="text-[14px] leading-[20px] font-normal text-pColor text-center mt-[12px] ">
              No extra hidden charge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
