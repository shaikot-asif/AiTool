import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const LatestBlogs = ({ image, tag, title, text, admin, date, classes }) => {
  return (
    <div className={`xl:w-[31%] lg:w-[30%] md:w-[29%]`}>
      <div className=" [&_img]:hover:scale-125 ">
        <div className="overflow-hidden w-full h-[150px] lg:h-[200px] rounded-xl ">
          <img
            className=" transition-all duration-500"
            src={image}
            alt={admin}
          />
        </div>
        <div className="lg:mt-5 flex flex-col gap-5">
          <p className="font-medium w-[50px] text-center border border-[#ffffff3d] px-3 py-1 rounded-2xl mt-5 text-white text-[12px] leading-[16px] bg-[#151225] ">
            {tag}
          </p>
          <h2 className="text-[20px] cursor-pointer leading-[28px] font-semibold text-white ">
            {title}
          </h2>
          <p>{text}</p>
          <div className=" flex flex-col md:flex-col lg:flex-row gap-2 lg:gap-5 ">
            <p className="text-[16px] flex gap-2 lg:justify-center items-center leading-[28px] font-semibold text-pColor">
              <span>
                <MdOutlineAdminPanelSettings />
              </span>
              {admin}
            </p>

            <p className="text-[16px] flex gap-2 lg:justify-center items-center leading-[28px] font-semibold text-pColor">
              <span>
                <CiCalendarDate />
              </span>
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
