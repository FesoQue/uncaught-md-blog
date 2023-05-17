import React from "react";
import getPostMetadata from "@/lib/getposts";
import PostCategories from "@/components/PostCategories";
import PostCards from "@/components/PostCards";
import HomepageHeader from "@/components/HomepageHeader";

const Home = () => {
  const postTags = getPostMetadata().map((post) => post.tag);
  return (
    <main>
      <HomepageHeader tags={postTags} />
      <section className="mx-auto max-w-[1024px] p-4">
        <div className="w-full md:flex md:items-start md:gap-14 lg:gap-16">
          <div className="md:w-[70%]">
            <p className="mb-10 font-semibold uppercase tracking-wider text-[#C4D46C]">
              Recently Published
            </p>
            <div className="space-y-6 rounded-md shadow-sm ">
              {getPostMetadata().map((post, i) => {
                return <PostCards key={i} postProps={post} />;
              })}
            </div>
          </div>
          <PostCategories />
        </div>
      </section>
    </main>
  );
};

export default Home;
