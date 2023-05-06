import getPostMetadata, { getPostContent } from "@/lib/getposts";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import remarkGfm from "remark-gfm";
import { montserrat } from "@/utils";
import getFormattedDate from "@/utils/getformatteddate";
import PostpageHeader from "@/components/PostPageHeader";

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

  const publishDate = getFormattedDate(post.data.date);

  return (
    <main>
      <PostpageHeader title={post.data.title} date={publishDate} />
      <article className="prose max-w-none p-5 prose-h1:text-[#E9C7A5] prose-h2:text-[#E9C7A5] prose-h3:text-[#E9C7A5] prose-h4:text-[#E9C7A5] prose-p:text-white prose-a:text-white prose-strong:text-white prose-code:text-[#F2CA27] prose-li:text-white prose-th:text-white prose-td:text-white">
        <article className="prose mx-auto max-w-3xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </article>
    </main>
  );
};

export default PostPage;
