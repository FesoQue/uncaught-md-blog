import Link from "next/link";
import React from "react";

const PostCategories = () => {
  return (
    <div className="hidden md:block md:w-[30%]">
      <p className="mb-8 font-semibold uppercase tracking-wider text-[#C4D46C]">
        Search blog by Category
      </p>
      <div>
        <div className="item-center flex flex-wrap gap-3">
          <Link
            href={"#"}
            className="rounded-2xl bg-[#E9C7A5] px-3 py-1 text-sm font-medium tracking-wide text-[#353A35]"
          >
            React
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#E9C7A5] px-3 py-1 text-sm font-medium tracking-wide text-[#353A35]"
          >
            Nextjs
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#E9C7A5] px-3 py-1 text-sm font-medium tracking-wide text-[#353A35]"
          >
            JavaScript
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#E9C7A5] px-3 py-1 text-sm font-medium tracking-wide text-[#353A35]"
          >
            TypeScript
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#E9C7A5] px-3 py-1 text-sm font-medium tracking-wide text-[#353A35]"
          >
            framer-motion
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#E9C7A5] px-3 py-1 text-sm font-medium tracking-wide text-[#353A35]"
          >
            CSS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCategories;
