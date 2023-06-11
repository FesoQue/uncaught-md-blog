import { z } from "zod";

export const SiteConfigSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  links: z.object({
    github: z.string(),
  }),
});

export const PostMetaSchema = z.object({
  title: z.string(),
  date: z.string(),
  subtitle: z.string(),
  slug: z.string(),
  tag: z.string(),
  // headings: z.array(z.string()),
});

const PagePropsSchema = z.object({
  params: z.object({
    slug: z.string(),
  }),
});
const CategoryPropsSchema = z.object({
  params: z.object({
    tag: z.string(),
  }),
});

const PostSchema = z.object({
  key: z.number(),
  postProps: z.object({
    title: z.string(),
    date: z.string(),
    subtitle: z.string(),
    slug: z.string(),
  }),
});

export type PostMetaType = z.infer<typeof PostMetaSchema>;
export type SiteConfig = z.infer<typeof SiteConfigSchema>;
export type PostType = z.infer<typeof PostSchema>;
export type PageProps = z.infer<typeof PagePropsSchema>;
export type CategoryProps = z.infer<typeof CategoryPropsSchema>;
