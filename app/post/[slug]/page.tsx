import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/lib/getposts";
// import { getPostContent } from "@/lib/getposts";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

interface PageProps {
  params: {
    slug: string[];
  };
}

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

const PostPage = ({ params }: PageProps) => {
  console.log(params);

  //   const slug = props.params.slug;
  //   console.log(slug);

  //   const post = getPostContent(slug);
  return (
    <div>
      {/* <div className="my-12 text-center">
        <h1 className="text-2xl text-[#E9C7A5]">{post.data.title}</h1>
        <p className="text-[#E9C7A5] mt-2">{post.data.date}</p>
      </div>

      <article className="prose max-w-none prose-p:text-[#FCFCFC] prose-a:text-[#FCFCFC] prose-h2:text-[#E9C7A5]">
        <div className="">
          <Markdown>{post.content}</Markdown>
        </div>
      </article> */}
    </div>
  );
};

export default PostPage;
