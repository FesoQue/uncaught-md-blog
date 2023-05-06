import React, { CSSProperties } from "react";
import { PostType } from "@/types";
import { montserrat } from "@/utils";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PostCards = ({ postProps }: PostType) => {
  return (
    <div
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
      <Link href={`/posts/${postProps.slug}`} className="post-card block p-4">
        <h2
          className={`${montserrat.variable} mb-2 font-montserrat text-[22px] font-semibold text-[#E9C7A5]`}
        >
          {postProps.title}
        </h2>
        <p className="mb-4 text-white">{postProps.subtitle}</p>
        <button className="flex items-center text-[#C4D46C] leading-none">
          Read more{" "}
          <span className="leading-none">
            <ArrowSmallRightIcon className="ml-3 h-5 w-5 text-[#C4D46C]" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default PostCards;
