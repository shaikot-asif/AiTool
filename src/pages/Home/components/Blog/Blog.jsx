import React from "react";
import LatestBlogs from "../../../../Components/ReadOurLatestBlogs/LatestBlogs";
import { blog } from "../../../../constants/blog";
import TextButton from "../../../../shared/ui/TextButton";
const Blog = () => {
  return (
    <div className="mb-[200px]">
      <div className="text-center w-full mb-10 flex flex-col gap-4">
        <TextButton text={"Read Our Latest Blog"} classes="w-[200px]" />
        <h2 className="font-extrabold text-[28px] md:text-[48px] leading-[38px] md:leading-[58px] text-white ">
          Latest Blog and News
        </h2>
        <p className=" md:w-[60%] m-auto font-medium text-[16px] leading-[28px] text-pColor ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          eaque voluptatem soluta fugit totam numquam.
        </p>
      </div>
      <div className="flex flex-wrap container m-auto justify-between gap-10 px-[50.5px]">
        {blog.map(
          (item, index) =>
            index <= 2 && (
              <LatestBlogs
                admin={item.admin}
                date={item.date}
                image={item.image}
                tag={item.tag}
                text={item.text}
                title={item.title}
                key={index}
                classes={"xl:w-[31%] lg:w-[30%] md:w-[29%] "}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Blog;
