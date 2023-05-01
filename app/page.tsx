import Link from "next/link";
import React from "react";
import getPostMetadata from "@/lib/getposts";

const Home = () => {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm">
      {getPostMetadata().map((post, i) => {
        return (
          <div key={i}>
            <p className="text-sm text-slate-400">{post.date}</p>

            <Link href={`/posts/${post.slug}`}>
              <h2 className=" text-violet-600 hover:underline mb-4">
                {post.title}
              </h2>
            </Link>
            <p className="text-slate-700">{post.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
