import "./globals.css";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
