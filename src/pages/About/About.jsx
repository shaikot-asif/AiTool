import React from "react";
import MainLayout from "../../Components/MainLayout";
import NewsAndUpdate from "../../Components/NewsAndUpdate/NewsAndUpdate";
import PageHeader from "../../Components/PageHeader";
import { images } from "../../constants";
import Button from "../../shared/ui/Button";
import MainFeatures from "../Home/components/MainFeature/MainFeatures";
import TryFree from "../Home/components/TryFree/TryFree";
import WallOfLove from "../Home/WallOfLove/WallOfLove";

const About = () => {
  return (
    <div>
      <MainLayout>
        <div>
          <PageHeader pageName={"About"} />
        </div>
        <div className=" ">
          <div className=" container m-auto px-[50.5px] flex flex-col lg:flex-row gap-5 mb-[200px] ">
            <div className="lg:w-1/2">
              <p className="font-semibold mb-2 tex-[14px] leading-[20px] md:leading-[24px] md:text-[16px] text-[#918ea0] ">
                About Our App
              </p>
              <h1 className="text-[28px] md:text-[48px] mb-4 leading-[38px] md:leading-[58px] text-white font-extrabold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="font-semibold leading-[20px] md:leading-[24px] text-[14px] md:text-[16px] text-pColor ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                similique deserunt quidem fuga odit ea culpa sequi beatae.
                Aliquid, earum?
              </p>
              <Button text={"Start Writing-it's Free"} />
            </div>
            <div className="lg:w-1/2">
              <img src={images.about} alt="" />
            </div>
          </div>

          <div>
            <MainFeatures />
          </div>
          <div>
            <WallOfLove />
          </div>
          <div>
            <TryFree />
          </div>
          <div>
            <NewsAndUpdate />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
