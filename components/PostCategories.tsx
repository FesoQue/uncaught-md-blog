import Link from "next/link";
import React from "react";

const PostCategories = () => {
  return (
    <div className="hidden md:block md:w-[30%]">
      <p className="mb-10 font-semibold uppercase tracking-wider text-[#C4D46C]">
        Search blog by Category
      </p>
      <div>
        <div className="item-center flex flex-wrap gap-3">
          <Link
            href={"#"}
            className="rounded-2xl bg-[#4F5875] px-3 py-1 text-sm text-[#fcfcfc]"
          >
            React
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#4F5875] px-3 py-1 text-sm text-[#fcfcfc]"
          >
            Nextjs
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#4F5875] px-3 py-1 text-sm text-[#fcfcfc]"
          >
            JavaScript
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#4F5875] px-3 py-1 text-sm text-[#fcfcfc]"
          >
            TypeScript
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#4F5875] px-3 py-1 text-sm text-[#fcfcfc]"
          >
            framer-motion
          </Link>
          <Link
            href={"#"}
            className="rounded-2xl bg-[#4F5875] px-3 py-1 text-sm text-[#fcfcfc]"
          >
            CSS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCategories;
