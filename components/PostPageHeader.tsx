"use client";
import Nav from "./Nav";
import { montserrat } from "@/utils/utils";
import useSpotlight from "@/hooks/useSpotlight";
import { motion, useMotionTemplate } from "framer-motion";
import { ShareIcon } from "@heroicons/react/24/solid";
import SharePopover from "./ui/Popover";

const PostpageHeader = ({
  title,
  date,
  tags,
}: {
  title: string;
  date: string;
  tags: string[];
}) => {
  const { mouseX, mouseY, handleMouseMove } = useSpotlight();

  return (
    <header
      className="group relative homepage-hero bg-[#353a35] overflow-hidden mb-10"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(147, 171, 97, .15),
              transparent 50%
            )
          `,
        }}
      />
      <Nav tags={tags} />
      <div className="grid min-h-[240px] place-content-center md:mb-8 md:min-h-[270px]">
        <div className="text-center">
          <h1
            className={`${montserrat.variable} font-montserrat text-3xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-semibold mb-3`}
          >
            {title}
          </h1>
          <p className="uppercase tracking-wider text-white text-sm md:text-base mb-3">
            {date}
          </p>
          {/* <button className="min-w-[75px] bg-white h-[28px] rounded-full font-semibold flex items-center mx-auto justify-center">
            <span className="mr-1 text-sm">share</span>
            <ShareIcon className="w-3 h-3 text-black" />
          </button> */}
          <SharePopover />
        </div>
      </div>
    </header>
  );
};

export default PostpageHeader;
