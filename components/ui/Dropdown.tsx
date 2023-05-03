"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { work_sans } from "@/utils";

const CategoryMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center text-white">
          Category{" "}
          <span className="ml-1">
            <ChevronDownIcon className="h-5 w-5 text-white" />
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`${work_sans.className} min-w-[180px] rounded-md bg-[#668892] p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade`}
          sideOffset={5}
        >
          <DropdownMenu.Item className="text-normal group relative flex h-[30px] select-none items-center rounded-[3px] pl-[25px] leading-none text-white outline-none data-[disabled]:pointer-events-none data-[highlighted]:text-[#E9C7A5]">
            <Link href={"/"} className="flex h-full w-full items-center">
              Reactjs
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group relative flex h-[30px] select-none items-center rounded-[3px] px-[5px] pl-[25px] leading-none text-white outline-none data-[disabled]:pointer-events-none data-[highlighted]:text-[#E9C7A5]">
            <Link href={"/"} className="flex h-full w-full items-center">
              Nextjs
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group relative flex h-[30px] select-none items-center rounded-[3px] px-[5px] pl-[25px] leading-none text-white outline-none data-[disabled]:pointer-events-none data-[highlighted]:text-[#E9C7A5]">
            <Link href={"/"} className="flex h-full w-full items-center">
              JavaScript
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group relative flex h-[30px] select-none items-center rounded-[3px] px-[5px] pl-[25px] leading-none text-white outline-none data-[disabled]:pointer-events-none data-[highlighted]:text-[#E9C7A5]">
            <Link href={"/"} className="flex h-full w-full items-center">
              TypeScript
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default CategoryMenu;
