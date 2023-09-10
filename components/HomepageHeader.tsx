"use client";
import Nav from "./Nav";
import { montserrat } from "@/utils/utils";
import useSpotlight from "@/hooks/useSpotlight";
import { motion, useMotionTemplate } from "framer-motion";

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
      <header className="grid min-h-[250px] place-content-center md:mb-8 md:min-h-[280px]">
        <div className="text-center">
          <h1
            className={`${montserrat.variable} font-montserrat text-4xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-bold mb-3`}
          >
            Hi, I&apos;m <span>Qudus</span>
          </h1>
          <p className="tracking-wider text-white md:text-base max-w-[500px] mx-auto px-5">
            This is where I share reflections on the top technologies I use in
            frontend web development.
          </p>
        </div>
      </header>
    </header>
  );
};

export default HomepageHeader;
