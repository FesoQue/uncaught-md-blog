import React from "react";
import getPostMetadata from "@/lib/getposts";
import PostCategories from "@/components/PostCategories";
import PostCards from "@/components/PostCards";
import HomepageHeader from "@/components/HomepageHeader";

const Home = () => {
  const duplicateTags = getPostMetadata().map((post) => post.tag);
  let postTags = [...new Set(duplicateTags)];

  return (
    <main className="pb-10">
      <HomepageHeader tags={postTags} />
      <section className="mx-auto max-w-[1024px] p-4">
        <div className="w-full md:flex md:items-start md:gap-14 lg:gap-16">
          <div className="w-full">
            <p className="mb-6 font-semibold uppercase tracking-wider text-[#C4D46C]">
              Recent Articles
            </p>
            <div className="grid md:grid-cols-2 gap-6 rounded-md shadow-sm ">
              {getPostMetadata().map((post, i) => {
                return <PostCards key={i} postProps={post} />;
              })}
            </div>
          </div>
          {/* <PostCategories /> */}
        </div>
      </section>
    </main>
  );
};

export default Home;
