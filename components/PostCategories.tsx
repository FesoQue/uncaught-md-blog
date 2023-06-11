import Link from "next/link";
import React from "react";
import getPostMetadata from "@/lib/getposts";

const PostCategories = () => {
  const duplicateTags = getPostMetadata().map((post) => post.tag);
  let postTags = [...new Set(duplicateTags)];

  return (
    <div className="hidden md:block md:w-[30%]">
      <p className="mb-6 font-semibold uppercase tracking-wider text-[#C4D46C]">
        Search blog by Category
      </p>
      <div>
        <div className="item-center flex flex-wrap gap-3">
          {postTags.map((post, i) => {
            return (
              <Link
                key={i}
                href={`/tutorials/${post}`}
                className="rounded-2xl bg-[#E9C7A5] px-3 h-[30px] flex items-center text-sm font-medium tracking-wide text-[#353A35] transition-all hover:bg-opacity-80"
              >
                {post}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostCategories;
