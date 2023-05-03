import React from "react";
import getPostMetadata from "@/lib/getposts";
import PostCategories from "@/components/PostCategories";
import PostCards from "@/components/PostCards";
import Nav from "@/components/Nav";
import { montserrat } from "@/utils";

const Home = () => {
  return (
    <main>
      <Nav />
      <header className="homepage-hero mb-10 grid min-h-[200px] place-content-center bg-[#353a35] md:mb-8 md:min-h-[300px]">
        <div className="text-center">
          <h1
            className={`${montserrat.variable} font-montserrat text-3xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-semibold mb-2`}
          >
            Uncaught Blog
          </h1>
          <p className="uppercase tracking-wider text-white text-sm md:text-base">
            by adefeso qudus
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-[1024px] p-4">
        <div className="w-full md:flex md:items-start md:gap-14 lg:gap-16">
          <div className="md:w-[70%]">
            <p className="mb-10 font-semibold uppercase tracking-wider text-[#C4D46C]">
              Recently Published
            </p>
            <div className="space-y-4 rounded-md shadow-sm ">
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
