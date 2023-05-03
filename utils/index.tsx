import { Montserrat, Charm, Work_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const work_sans = Work_Sans({ subsets: ["latin"] });
