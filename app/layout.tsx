import { siteConfig } from "@/config/site";
import "./globals.css";
import { work_sans } from "@/utils/utils";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.description}`,
  keywords: ["Next.js", "Markdown", "Tailwindcss", "Server Components", "zod"],
  authors: [
    {
      name: "Adefeso Qudus",
      url: "https://qdus.netlify.app",
    },
  ],
  creator: "Adefeso Qudus",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
