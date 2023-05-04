import { montserrat } from "@/utils";
import React from "react";

const Header = ({ path }: { path: string }) => {
  return (
    <header className="homepage-hero mb-10 grid min-h-[200px] place-content-center bg-[#353a35] md:mb-8 md:min-h-[300px]">
      <div className="text-center">
        <h1
          className={`${montserrat.variable} font-montserrat text-3xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-semibold mb-3`}
        >
          {path}
        </h1>
        <p className="uppercase tracking-wider text-white text-sm md:text-base">
          0 Articles
        </p>
      </div>
    </header>
  );
};

export default Header;
