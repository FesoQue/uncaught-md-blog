import { ImageResponse } from "next/server";
import { CategoryProps } from "@/types";
import { capitalize } from "@/utils/utils";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "edge";

export default async function og({ params }: CategoryProps) {
  const worksansSemiBold = fetch(
    new URL("../../assets/WorkSans-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const montserratSemiBold = fetch(
    new URL("../../assets/Montserrat-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const [worksansSemiBoldData, montserratSemiBoldData] = await Promise.all([
    worksansSemiBold,
    montserratSemiBold,
  ]);
  const category = params?.tag?.split("-").join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          background: "#3F463A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "white",
          padding: 20,
        }}
      >
        <div
          style={{
            height: 50,
            fontSize: 25,
            fontWeight: "800",
            border: "2px solid #C4D46C",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            fontFamily: "Worksans SemiBold",
          }}
        >
          Qwrites
        </div>
        <div
          style={{
            fontSize: 85,
            width: "100%",
            height: "90%",
            display: "flex",
            alignItems: "center",
            color: "white",
            justifyContent: "center",
            fontFamily: "Montserrat SemiBold",
            textAlign: "center",
          }}
        >
          {capitalize(category)} Tutorials
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Worksans SemiBold",
          data: worksansSemiBoldData,
        },
        {
          name: "Montserrat SemiBold",
          data: montserratSemiBoldData,
        },
      ],
    }
  );
}
