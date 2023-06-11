import fs from "fs";
import matter from "gray-matter";
import { PostMetaType } from "@/types";

const getPostMetadata = (): PostMetaType[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      tag: matterResult.data.tag,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostContent = async (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const getPostHeadings = async (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const regexHeader = /#{2,6}.+/g;
  const headings = content.match(regexHeader);
  return headings;
};
export default getPostMetadata;
