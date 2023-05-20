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
import langBash from "highlight.js/lib/languages/bash";
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
  const duplicateTags = await getPostMetadata().map((post) => post.tag);
  let postTags = [...new Set(duplicateTags)];

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
              bash: langBash,
            },
          },
        ],
      ],
    },
  };

  return (
    <main className="relative pb-10">
      <PostpageHeader
        title={post.data.title}
        date={publishDate}
        tags={postTags}
      />
      <div className="relative lg:flex lg:w-[80%] lg:ml-auto lg:items-start lg:gap-16 prose max-w-none p-5 prose-p:leading-[1.4]  prose-h2:text-[#E9C7A5] prose-h3:text-[#E9C7A5] prose-h4:text-[#E9C7A5] prose-p:text-white prose-a:text-white prose-strong:text-white  prose-li:text-white prose-th:text-white prose-td:text-white prose-code:text-white">
        <article className="prose mx-auto max-w-[800px] prose-h1:text-[rgb(233,199,165)]">
          {/* @ts-expect-error Server Component*/}
          <MDXRemote source={post.content} options={options} />
        </article>
        <div
          className="hidden lg:block lg:w-[400px] lg:sticky lg:top-10 lg:right-0 prose-h1:text-white prose-p:leading-[.8] prose-p:text-gray-200 prose-p:text-sm"
          style={{ borderLeft: "1px solid gray", paddingLeft: "1rem" }}
        >
          <h1 className="font-medium text-base capitalize mb-3">
            On this page
          </h1>
          <p>Setup</p>
          <p>Folder Structure</p>
        </div>
      </div>
    </main>
  );
};

export default PostPage;
