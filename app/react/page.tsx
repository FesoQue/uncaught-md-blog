"use client";
import React from "react";
import { PageProps } from "@/types";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";

const Category = () => {
  const pathSegment = usePathname();
  const pathName = pathSegment.split("/")[1];

  return (
    <div>
      <Header path={pathName} />
    </div>
  );
};

export default Category;
