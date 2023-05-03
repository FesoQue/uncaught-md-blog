"use client";
import { charm } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategoryMenu from "./ui/Dropdown";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { RoughNotation } from "react-rough-notation";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <nav className="bg-[#353a35] p-4">
      <div className="mx-auto flex max-w-[1024px] items-center justify-between">
        <div className="flex items-center">
          <Link
            href=""
            className={`${charm.className} mr-3 md:mr-5 lg:mr-10 text-xl font-bold text-[#ffffff]`}
          >
            <RoughNotation
              type="circle"
              show={show}
              color="#C4D46C"
              // padding={5}
            >
              Uncaught
            </RoughNotation>
          </Link>
          <CategoryMenu />
        </div>
        <div className="social-icons flex items-center">
          <a href="#" className="mr-4">
            <AiFillGithub color="#fcfcfc" size={"28"} />
          </a>
          <a href="#" className="">
            <AiOutlineTwitter color="#fcfcfc" size={"28"} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
