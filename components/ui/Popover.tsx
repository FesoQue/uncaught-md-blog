"use client";
import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { work_sans } from "@/utils/utils";
import { ShareIcon } from "@heroicons/react/24/solid";

const SharePopover = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className={`${work_sans.className} bg-white min-w-[100px] px-1 justify-center text h-[40px] rounded flex items-center font-semibold fixed top-[90vh] right-1/2 -translate-x-1/2 left-1/2`}
        aria-label="Update dimensions"
      >
        share{" "}
        <span className="ml-2">
          <ShareIcon className="w-4 h-4 text-black" />
        </span>
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded p-3 w-[320px] md:w-[400px] md:p-4 bg-white will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        <div>
          <div className="mb-3">
            <p className="font-medium leading-[.85]">Share to web</p>
            <span className="text-sm text-gray-500">
              Anyone with the link can read it
            </span>
          </div>
          <div>
            <div className="flex w-full h-[38px] items-center border border-1 border-[#000000ab] rounded">
              <div className="overflow-hidden w-[80%]">
                <p className="text-sm text-gray-500 px-2">
                  https:www.uncaught.dev/posts/aws..
                </p>
              </div>
              <button className="text-sm w-[25%] h-full border-l border-l-1 border-[#000000ab] text-center font-semibold">
                copy
              </button>
            </div>
          </div>
        </div>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default SharePopover;
