import getPostMetadata, { getPostContent } from "@/lib/getposts";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { getFormattedDate } from "@/utils/utils";
import PostpageHeader from "@/components/PostPageHeader";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
// import language
import langJavascript from "highlight.js/lib/languages/javascript";
import langTypescript from "highlight.js/lib/languages/typescript";
// import style for syntax highlighting
import "../../../styles/highlight-js/onedark.css";

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

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypeHighlight,
          {
            languages: {
              javascript: langJavascript,
              typescript: langTypescript,
            },
          },
        ],
      ],
    },
  };

  return (
    <main className="relative">
      <PostpageHeader title={post.data.title} date={publishDate} />
      <div className="prose max-w-none p-5 prose-h1:text-[rgb(233,199,165)] prose-h2:text-[#E9C7A5] prose-h3:text-[#E9C7A5] prose-h4:text-[#E9C7A5] prose-p:text-white prose-a:text-white prose-strong:text-white  prose-li:text-white prose-th:text-white prose-td:text-white prose-code:text-white">
        <article className="prose mx-auto max-w-3xl">
          {/* @ts-expect-error Server Component*/}
          <MDXRemote source={post.content} options={options} />
        </article>
      </div>
    </main>
  );
};

export default PostPage;
