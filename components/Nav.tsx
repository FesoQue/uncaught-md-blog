"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategoryMenu from "./ui/Dropdown";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { RoughNotation } from "react-rough-notation";

const Nav = ({ tags }: { tags: string[] }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <nav className="p-4">
      <div className="mx-auto flex max-w-[1024px] items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-3 md:mr-5 lg:mr-10 text-xl font-bold text-[#ffffff]"
          >
            <RoughNotation
              type="circle"
              show={show}
              color="#C4D46C"
              padding={5}
            >
              Uncaught
            </RoughNotation>
          </Link>
          <CategoryMenu tags={tags} />
        </div>
        <div className="social-icons flex items-center gap-4 md:gap-6">
          <a href="https://github.com/FesoQue" title="Github">
            <AiFillGithub color="#fcfcfc" size={"28"} />
          </a>
          <a href="#" title="twitter">
            <AiOutlineTwitter color="#fcfcfc" size={"28"} />
          </a>
          <a
            href="https://qdus.netlify.app/"
            className="hidden md:block"
            title="Portfolio"
          >
            <BsGlobe color="#fcfcfc" size={"22"} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
