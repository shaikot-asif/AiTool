import React from "react";
import Button from "../../../shared/ui/Button";

const Contact = () => {
  return (
    <div className="container w-[90%] lg:w-[70%] p-[20px] md:p-[40px] rounded-2xl m-auto bg-[linear-gradient(180deg,_hsla(0,_0%,_100%,_.04),_hsla(0,_0%,_100%,_0))]">
      <form className="flex flex-col " action="">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="flex flex-col w-full">
            <label className="text-white mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="py-3 px-6 w-full text-pColor text-[16px] rounded-md bg-transparent border border-[hsla(0,_0%,_100%,_.12)] outline-none focus:border-[#6e25ed]  "
              placeholder="Enter your Name"
              id="name"
              type="text"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="py-3 px-6 w-full text-pColor text-[16px] rounded-md bg-transparent border border-[hsla(0,_0%,_100%,_.12)] outline-none focus:border-[#6e25ed]  "
              placeholder="Enter your Email"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label className="text-white mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-[200px] py-3 px-6 w-full text-pColor text-[16px] rounded-md bg-transparent border border-[hsla(0,_0%,_100%,_.12)] outline-none focus:border-[#6e25ed]  "
            placeholder="Type your message"
            name=""
            id="message"
            rows="40"
          ></textarea>
        </div>
        <Button classes={"m-auto block"} text={"Sent Message"} />
      </form>
    </div>
  );
};

export default Contact;
