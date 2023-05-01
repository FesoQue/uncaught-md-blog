import Link from "next/link";
import React from "react";
import getPostMetadata from "@/lib/getposts";
import { montserrat } from "@/utils";

const Home = () => {
  return (
    <div>
      <div className="p-4 max-w-[1000px] mx-auto">
        <div className="mb-5">
          <p className="text-[#fcfcfc] uppercase font-semibold">
            Recently Published
          </p>
        </div>
        <div className="rounded-md shadow-sm space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-5">
          {getPostMetadata().map((post, i) => {
            return (
              <div key={i} className="bg-[#353a35] ">
                <Link
                  href={`/posts/${post.slug}`}
                  className="post-card p-4 rounded block"
                >
                  <h2
                    className={`${montserrat.variable} font-montserrat text-2xl text-[#E9C7A5] mb-2 font-semibold`}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[#fcfcfc] text-sm mb-3">{post.subtitle}</p>
                  <button className="text-[#C4D46C]">read more</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
