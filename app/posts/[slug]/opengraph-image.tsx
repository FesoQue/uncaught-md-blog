import { ImageResponse } from "next/server";
import { PageProps } from "@/types";
import { capitalize } from "@/utils/utils";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "edge";

export default async function og({ params }: PageProps) {
  const blogTitle = params?.slug?.split("-").join(" ");

  return new ImageResponse(
    (
      // <div
      // style={{
      //   fontSize: 128,
      //   background: "#3F463A",
      //   width: "100%",
      //   height: "100%",
      //   display: "flex",
      //   alignItems: "center",
      //   color: "white",
      //   justifyContent: "center",
      // }}
      // >
      //   {capitalize(blogTitle)}
      // </div>
      <div
        style={{
          // fontSize: 128,
          background: "#3F463A",
          width: "100%",
          height: "100%",
          display: "flex",
          // alignItems: "center",
          color: "white",
          // justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 25, fontWeight: "bold" }}>uncaught</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
