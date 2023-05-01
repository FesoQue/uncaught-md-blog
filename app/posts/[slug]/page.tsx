import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/lib/getposts";
import { getPostContent } from "@/lib/getposts";

interface PageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = ({ params }: PageProps) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-[#E9C7A5]">{post.data.title}</h1>
        <p className="text-[#E9C7A5] mt-2">{post.data.date}</p>
      </div>

      <article className="prose max-w-none prose-p:text-[#FCFCFC] prose-a:text-[#FCFCFC] prose-h2:text-[#E9C7A5]">
        <div className="">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </div>
  );
};

export default PostPage;
