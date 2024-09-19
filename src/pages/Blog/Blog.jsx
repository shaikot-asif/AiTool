import React from "react";
import MainLayout from "../../Components/MainLayout";
import PageHeader from "../../Components/PageHeader";
import LatestBlogs from "../../Components/ReadOurLatestBlogs/LatestBlogs";
import { blog } from "../../constants/blog";

const Blog = () => {
  return (
    <MainLayout>
      <PageHeader pageName={"Blog"} />
      <div className="flex container mb-[150px] m-auto px-[50.5px] flex-wrap justify-between gap-y-10">
        {blog.map((item, index) => (
          <LatestBlogs
            admin={item.admin}
            date={item.date}
            image={item.image}
            tag={item.tag}
            text={item.text}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Blog;
