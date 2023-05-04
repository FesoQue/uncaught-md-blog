import React from "react";
import Header from "@/components/Header";
import getPostMetadata from "@/lib/getposts";

const Category = async () => {
  // const reactPosts = await getPostMetadata().find(
  //   (post) => post.tag === pathName
  // );
  // console.log(searchParams);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Category;
