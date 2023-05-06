import React, { CSSProperties } from "react";
import getPostMetadata from "@/lib/getposts";
import { montserrat } from "@/utils";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { PageProps } from "@/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.slug} articles`,
    description: `This blog post covers everything you need to know about ${params.slug}`,
  };
}

const Tutorials = async ({ params }: PageProps) => {
  const articles = await getPostMetadata().filter(
    (article) => article.tag === params.slug
  );

  return (
    <div>
      <header className="homepage-hero mb-10 grid min-h-[200px] place-content-center bg-[#353a35] md:mb-8 md:min-h-[250px]">
        <div className="text-center">
          <h1
            className={`${montserrat.variable} font-montserrat text-3xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-semibold mb-3`}
          >
            {params.slug}
          </h1>
          <p className="uppercase tracking-wider text-white text-sm md:text-base">
            {articles?.length} Articles
          </p>
        </div>
      </header>
      <div className="max-w-[1024px] mx-auto grid grid-cols-2 gap-5 p-4">
        {articles.map((article, i) => {
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
                href={`/posts/${article.slug}`}
                className="post-card block p-4"
              >
                <h2
                  className={`${montserrat.variable} mb-2 font-montserrat text-[22px] font-semibold text-[#E9C7A5]`}
                >
                  {article.title}
                </h2>
                <p className="mb-4 text-white">{article.subtitle}</p>
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
  );
};

export default Tutorials;
