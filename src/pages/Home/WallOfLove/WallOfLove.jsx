import React, { useState } from "react";
import { wall } from "../../../constants/wall";
import PricingButton from "../../../shared/ui/PricingButton";
import TextButton from "../../../shared/ui/TextButton";
import Card from "./Card/Card";

const WallOfLove = () => {
  const [isShow, setIsShow] = useState(false);
  const [indexVal, setIndexVal] = useState(8);

  console.log("isShow: ", isShow, "indesVal:", indexVal);

  const handleClickClose = () => {
    setIndexVal(8);
    setIsShow(false);
  };

  const handleClickLess = () => {
    setIndexVal(wall.length - 1);
    setIsShow(true);
  };

  return (
    <div className="container mb-[200px] overflow-hidden m-auto px-[20px] md:px-[50.5px] relative ">
      <div className="text-center w-full mb-10 flex flex-col gap-4">
        <TextButton text={"Wall of love"} classes="w-[136px]" />
        <h2 className="font-extrabold text-[28px] md:text-[48px] leading-[38px] md:leading-[58px] text-white ">
          What Our User Says
        </h2>
        <p className=" md:w-[60%] m-auto font-medium text-[16px] leading-[28px] text-pColor ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          eaque voluptatem soluta fugit totam numquam.
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-5">
        {wall.map(
          (item, index) =>
            index <= indexVal && (
              <Card
                image={item.image}
                name={item.name}
                text={item.text}
                userName={item.userName}
                key={index}
                classes="lg:w-[31%] xl:w-[32%]  md:w-[48%] "
              />
            )
        )}
      </div>

      <div
        className={`${
          isShow ? "hidden" : "block"
        } absolute w-[91%] z-[1] bg-[linear-gradient(0deg,_rgba(3,0,20,1)_49%,_rgba(3,0,20,0.25253851540616246)_100%)] h-[200px] mx-auto opacity-90 bottom-0 left-0 right-0`}
      ></div>

      <div className="w-full block relative z-10">
        {isShow ? (
          <PricingButton
            handleClick={handleClickClose}
            text={"Okay, i get the point"}
            classes="block m-auto mt-4"
          />
        ) : (
          <PricingButton
            handleClick={handleClickLess}
            text={"Show More"}
            classes="block m-auto"
          />
        )}
      </div>
    </div>
  );
};

export default WallOfLove;
