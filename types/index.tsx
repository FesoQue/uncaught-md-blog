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
});

export type PostMetaType = z.infer<typeof PostMetaSchema>;
export type SiteConfig = z.infer<typeof SiteConfigSchema>;
