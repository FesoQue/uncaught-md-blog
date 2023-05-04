import Nav from "@/components/Nav";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

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
    icon: "/favicon.ico",
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
