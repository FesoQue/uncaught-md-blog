import getPostMetadata from "@/lib/getposts";
import { Montserrat, Work_Sans } from "next/font/google";

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}

export function removeHashesAndWhitespace(str: string) {
  return str.replace(/#{1,6}\s*/g, "");
}

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const work_sans = Work_Sans({ subsets: ["latin"] });
