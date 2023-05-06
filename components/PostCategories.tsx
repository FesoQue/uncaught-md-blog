import Link from "next/link";
import React from "react";
import getPostMetadata from "@/lib/getposts";

const PostCategories = () => {
  return (
    <div className="hidden md:block md:w-[30%]">
      <p className="mb-8 font-semibold uppercase tracking-wider text-[#C4D46C]">
        Search blog by Category
      </p>
      <div>
        <div className="item-center flex flex-wrap gap-3">
          {getPostMetadata().map((post, i) => {
            return (
              <Link
                key={i}
                href={`/tutorials/${post.tag}`}
                className="rounded-2xl bg-[#E9C7A5] px-3 py-2 text-sm font-medium tracking-wide leading-none text-[#353A35]"
              >
                {post.tag}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostCategories;
