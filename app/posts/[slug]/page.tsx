import getPostMetadata, {
  getPostContent,
  getPostHeadings,
} from "@/lib/getposts";
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
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { removeHashesAndWhitespace } from "@/utils/utils";

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
  const headings = await getPostHeadings(slug);

  const allPosts = await getPostMetadata().find((post) => post.slug === slug);
  const duplicateTags = await getPostMetadata().map((post) => post.tag);
  let postTags = [...new Set(duplicateTags)];

  if (!allPosts || !post) {
    notFound();
  }
  const publishDate = getFormattedDate(post.data.date);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkToc],
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
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behaviour: "append",
            properties: {
              ariaHidden: true,
              tabIndex: -1,
              className: "hash-link",
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
        <article className="prose mx-auto max-w-3xl prose-h1:text-[rgb(233,199,165)]">
          {/* @ts-expect-error Server Component*/}
          <MDXRemote source={post.content} options={options} />
        </article>
        <div
          className="hidden lg:block lg:w-[400px] lg:sticky lg:top-10 lg:right-0 prose-h1:text-white prose-p:leading-[.8] prose-p:text-gray-200 prose-p:text-sm"
          style={{ borderLeft: "1px solid gray", paddingLeft: "1rem" }}
        >
          <h1 className="font-medium text-base capitalize mb-1">
            On this page
          </h1>
          <ul>
            {headings?.map((heading) => {
              const outputString = removeHashesAndWhitespace(heading);
              const lowercaseString = outputString.toLowerCase();
              const hyphenatedString = lowercaseString
                .replace(/[\W_]+$/, "") // remove non-alphanumeric characters (!, ?)  or underscores at the end of the string:
                .replace(/'/g, "") // remove apostrophe from the string
                .replace(/\s+/g, "-"); //join the string with hyphen

              return (
                <li key={heading}>
                  <a href={`#${hyphenatedString}`}>{outputString}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PostPage;
