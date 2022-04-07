import { ImageWithBlur } from "@components/image-with-blur";

import { styled } from "@theme";

export function TestimonyAuthor() {
  return (
    <Container>
      <ImageWithBlur
        src={"/assets/image-mobile-nurse.webp"}
        blurURL={"/assets/image-mobile-nurse-blur.webp"}
        alt={"hospital"}
        layout="fill"
        objectFit="cover"
        aspect_ratio={{ width: 642, height: 400 }}
      />
      <span>- HANNAH SAMBA, MSF OUTREACH NURSE</span>
    </Container>
  );
}

const Container = styled("div", {
  backgroundColor: "#000000",
  gridArea: "testimony-author",
  "--aspect_ratio": "calc(400 / 642)",

  "--image-width": "100%",

  width: "var(--image-width)",
  paddingBottom: "calc(var(--image-width) * var(--aspect_ratio))",

  position: "relative",

  span: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    right: "0px",

    fontSize: "$1",

    fontWeight: "$semibold",
    color: "white",
    textAlign: "center",

    letterSpacing: "0.99px",
  },
});
