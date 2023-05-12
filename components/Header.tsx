"use client";
import { montserrat } from "@/utils/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathSegment = usePathname();
  const pathName = pathSegment.split("/")[1];
  return (
    <header className="homepage-hero mb-10 grid min-h-[240px] place-content-center bg-[#353a35] md:mb-8 md:min-h-[270px]">
      <div className="text-center">
        <h1
          className={`${montserrat.variable} font-montserrat text-3xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-semibold mb-3`}
        >
          {pathName}
        </h1>
        <p className="uppercase tracking-wider text-white text-sm md:text-base">
          0 Articles
        </p>
      </div>
    </header>
  );
};

export default Header;
