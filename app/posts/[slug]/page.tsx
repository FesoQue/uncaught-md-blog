import Markdown from "markdown-to-jsx";
import getPostMetadata, { getPostContent } from "@/lib/getposts";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPostContent(params.slug);

  if (!page) {
    return {};
  }
  return {
    title: page.data.title,
    description: page.data.subtitle,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return getPostMetadata().map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = async ({ params }: PageProps) => {
  const slug = params?.slug;
  const post = await getPostContent(slug);
  const allPosts = await getPostMetadata().find((post) => post.slug === slug);

  if (!allPosts || !post) {
    notFound();
  }

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
