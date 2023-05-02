import Link from "next/link";
import React from "react";
import getPostMetadata from "@/lib/getposts";
import { montserrat } from "@/utils";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { CSSProperties } from "react";
import { charm } from "@/utils";

const Home = () => {
  return (
    <main>
      <header className="homepage-hero mb-10 min-h-[200px] bg-[#353a35] md:mb-14 md:min-h-[300px]">
        <nav className="mx-auto flex max-w-[1100px] items-center p-4">
          <Link
            href=""
            className={`${charm.className} text-2xl font-bold text-[#C4D46C]`}
          >
            DevWrites
          </Link>
          <p className="text-xl text-white">Category</p>
        </nav>
      </header>
      <section className="mx-auto max-w-[1100px] p-4">
        <div className="w-full md:flex md:items-start md:gap-14 lg:gap-16">
          <div className="md:w-[70%]">
            <p className="mb-10 font-semibold uppercase tracking-wider text-[#C4D46C]">
              Recently Published
            </p>
            <div className="space-y-4 rounded-md shadow-sm ">
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
                    className="post-card-wrapper rounded-md border border-transparent [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
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
                      <p className="mb-3 text-sm text-[#fcfcfc]">
                        {post.subtitle}
                      </p>
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

          <div className="hidden md:block md:w-[30%]">
            <p className="mb-10 font-semibold uppercase tracking-wider text-[#C4D46C]">
              Search blog by Category
            </p>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quibusdam exercitationem magnam neque sed hic adipisci atque,
              beatae amet voluptatem deleniti. Culpa, perferendis. Perspiciatis
              placeat expedita accusamus delectus dignissimos. Voluptatum?
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
