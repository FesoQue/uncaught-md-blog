import Link from "next/link";
import React from "react";
import getPostMetadata from "@/lib/getposts";
import { charm } from "@/utils";
import PostCategories from "@/components/PostCategories";
import PostCards from "@/components/PostCards";
import CategoryMenu from "@/components/ui/Dropdown";

const Home = () => {
  return (
    <main>
      <header className="homepage-hero mb-10 min-h-[200px] bg-[#353a35] md:mb-8 md:min-h-[300px]">
        <nav className="mx-auto flex max-w-[1024px] items-center p-4">
          <Link
            href=""
            className={`${charm.className} text-2xl font-bold text-[#C4D46C]`}
          >
            DevWrites
          </Link>
          <CategoryMenu />
        </nav>
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
