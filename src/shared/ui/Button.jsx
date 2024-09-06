import React from "react";

const Button = ({ text, classes }) => {
  return (
    <div>
      <button
        className={`${classes} px-5 py-3 my-7 font-medium text-[16px] leading-6 bg-[linear-gradient(180deg,_#a073ee_-11.11%,_#6e25ed)] hover:opacity-80 transition-all duration-500 rounded-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
