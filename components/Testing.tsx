"use client";

import { montserrat } from "@/utils/utils";
import React, { ReactNode } from "react";

const Testing = ({ children }: { children: ReactNode }) => {
  return (
    <header className="grid min-h-[300px] place-content-center md:mb-8 md:min-h-[280px]">
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
        {children}
      </div>
    </header>
  );
};

export default Testing;
