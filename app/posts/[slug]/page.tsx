import getPostMetadata, { getPostContent } from "@/lib/getposts";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import remarkGfm from "remark-gfm";
import { montserrat } from "@/utils";
import getFormattedDate from "@/utils/getformatteddate";

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
    <div>
      <div className="mb-12 text-center">
        <div className="homepage-hero mb-10 grid min-h-[200px] place-content-center bg-[#353a35] md:mb-8 md:min-h-[300px]">
          <div>
            <h1
              className={`${montserrat.variable} font-montserrat text-3xl text-[#E9C7A5] capitalize md:text-3xl lg:text-5xl font-semibold mb-3`}
            >
              {post.data.title}
            </h1>
            <p className="uppercase tracking-wider text-white text-sm md:text-base">
              {publishDate}
            </p>
          </div>
        </div>
      </div>

      <article className="prose max-w-none p-5 prose-h1:text-[#E9C7A5] prose-h2:text-[#E9C7A5] prose-h3:text-[#E9C7A5] prose-h4:text-[#E9C7A5] prose-p:text-white prose-a:text-white prose-strong:text-white prose-code:text-[#F2CA27] prose-li:text-white prose-th:text-white prose-td:text-white">
        <article className="prose mx-auto max-w-3xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </article>
    </div>
  );
};

export default PostPage;
