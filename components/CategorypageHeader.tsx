"use client";
import Nav from "./Nav";
import { montserrat } from "@/utils/utils";
import useSpotlight from "@/hooks/useSpotlight";
import { motion, useMotionTemplate } from "framer-motion";

const CategorypageHeader = ({
  category,
  amount,
  tags,
}: {
  category: string;
  amount: number;
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
            className={`${montserrat.variable} font-montserrat text-3xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-semibold mb-3`}
          >
            {category}
          </h1>
          <p className="uppercase tracking-wider text-white text-sm md:text-base">
            {amount} Article(s)
          </p>
        </div>
      </header>
    </header>
  );
};

export default CategorypageHeader;
