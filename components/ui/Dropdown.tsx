import React, { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { work_sans } from "@/utils/utils";
import { usePathname } from "next/navigation";

const CategoryMenu = ({ tags }: { tags: string[] }) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center text-white ml-2">
          Category{" "}
          <span className="ml-1">
            <ChevronDownIcon className="h-4 w-4 text-white" />
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`${work_sans.className} min-w-[180px] rounded-md bg-[#668892] py-[8px] px-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade`}
          sideOffset={5}
        >
          {tags?.map((tag) => {
            return (
              <DropdownMenu.Item
                key={tag}
                className="group relative flex h-[32px] select-none items-center rounded-[3px] px-[5px] pl-[25px] leading-none text-white outline-none data-[disabled]:pointer-events-none data-[highlighted]:text-[#E9C7A5]"
              >
                <Link
                  href={`/tutorials/${tag}`}
                  className="flex h-full w-full items-center"
                >
                  {tag}
                </Link>
              </DropdownMenu.Item>
            );
          })}

          {/* <DropdownMenu.Item className="group relative flex h-[32px] select-none items-center rounded-[3px] px-[5px] pl-[25px] leading-none text-white outline-none data-[disabled]:pointer-events-none data-[highlighted]:text-[#E9C7A5]">
            <Link
              href={"/tutorials/javascript"}
              className="flex h-full w-full items-center"
            >
              JavaScript
            </Link>
          </DropdownMenu.Item> */}
          <DropdownMenu.Arrow className="fill-[#668892]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default CategoryMenu;
