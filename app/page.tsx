import Link from "next/link";
import React from "react";
import getPostMetadata from "@/lib/getposts";
import { montserrat } from "@/utils";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { CSSProperties } from "react";

const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1000px] p-4">
        <div className="mb-5">
          <p className="font-semibold uppercase text-[#fcfcfc]">
            Recently Published
          </p>
        </div>
        <div className="space-y-4 rounded-md shadow-sm lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          {getPostMetadata().map((post, i) => {
            return (
              <div
                key={i}
                style={
                  {
                    "--dark-purple": "53 58 53",
                    "--light-purple": "249 248 113",

                    "--bg-color":
                      "linear-gradient(rgb(var(--dark-purple)), rgb(var(--dark-purple)))",
                    "--border-color": `linear-gradient(145deg,
            rgb(var(--light-purple)) 0%,
            rgb(var(--light-purple) / 0.3) 33.33%,
            rgb(var(--light-purple) / 0.14) 66.67%,
            rgb(var(--light-purple) / 0.1) 100%)
          `,
                  } as CSSProperties
                }
                className="post-card-wrapper rounded-lg border border-transparent [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
              >
                <Link
                  href={`/posts/${post.slug}`}
                  className="post-card block p-4"
                >
                  <h2
                    className={`${montserrat.variable} mb-2 font-montserrat text-2xl font-semibold text-[#E9C7A5]`}
                  >
                    {post.title}
                  </h2>
                  <p className="mb-3 text-sm text-[#fcfcfc]">{post.subtitle}</p>
                  <button className="flex items-center text-[#C4D46C]">
                    read more{" "}
                    <span>
                      <ArrowSmallRightIcon className="ml-3 h-5 w-5 text-[#C4D46C]" />
                    </span>
                  </button>
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
