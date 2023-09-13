"use client";
import Nav from "./Nav";
import { montserrat } from "@/utils/utils";
import useSpotlight from "@/hooks/useSpotlight";
import { motion, useMotionTemplate } from "framer-motion";
import Link from "next/link";

const HomepageHeader = ({ tags }: { tags: string[] }) => {
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
              rgba(147, 171, 97, .18),
              transparent 50%
            )
          `,
        }}
      />
      <Nav tags={tags} />
      <div className="grid min-h-[300px] place-content-center md:mb-8 md:min-h-[280px]">
        <div className="text-center">
          <h1
            className={`${montserrat.variable} font-montserrat text-4xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-bold mb-3`}
          >
            Hi, I&apos;m <span>Qudus</span>
          </h1>
          <p className="tracking-wider mb-5 text-white md:text-base max-w-[500px] mx-auto px-5">
            This is where I share reflections on the top technologies I use in
            frontend web development.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag, i) => {
              return (
                <Link
                  key={i}
                  href={`/tutorials/${tag}`}
                  className="h-[30px] min-w-[60px] flex items-center justify-center text-sm font-medium tracking-wide rounded-2xl bg-[#E9C7A5] text-[#353A35] transition-all hover:bg-opacity-80"
                >
                  #{tag}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
