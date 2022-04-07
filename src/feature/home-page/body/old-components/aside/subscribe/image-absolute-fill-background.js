import { styled } from "@theme";

import { ImageWithBlur } from "@components/image-with-blur";

export function ImageAbsoluteFillBackground({ children }) {
  return (
    <>
      <ImageAbsoluteFillBackgroundContainer>
        <ImageWithBlur
          src={"/assets/image-subscribe-mobile-darker.webp"}
          blurURL={"/assets/image-subscribe-mobile-blur.webp"}
          alt={"hospital"}
          layout="fill"
          objectFit="cover"
          aspect_ratio={{ width: 548, height: 999 }}
        />
        {children}
      </ImageAbsoluteFillBackgroundContainer>
    </>
  );
}

const ImageAbsoluteFillBackgroundContainer = styled("div", {
  width: "100%",
  paddingBottom: "calc( 100% * 999 / 548)",
  position: "relative",
});

