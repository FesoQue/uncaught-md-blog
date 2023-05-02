import { Montserrat, Charm } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});
