import getPostMetadata from "@/lib/getposts";
import Link from "next/link";

export const page = () => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-red-600"
    >
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
