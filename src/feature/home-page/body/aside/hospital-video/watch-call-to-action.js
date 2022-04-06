import { styled } from "@theme";
import { ImageWithBlur } from "@components/image-with-blur";

export function WatchCallToAction() {
  return (
    <>
      <PortraitOnlyImageContainer>
        <ImageWithBlur
          src={"/assets/image-mobile-hospital.webp"}
          blurURL={"/assets/image-mobile-hospital-blur.webp"}
          alt={"hospital"}
          layout="fill"
          objectFit="cover"
          aspect_ratio={{ width: 548, height: 309 }}
        />
      </PortraitOnlyImageContainer>
      <LandscapeOnlyImageContainer>
        <ImageWithBlur
          src={"/assets/image-desktop-hospital.webp"}
          blurURL={"/assets/image-desktop-hospital-blur.webp"}
          alt={"hospital"}
          layout="fill"
          objectFit="cover"
          aspect_ratio={{ width: 800, height: 441 }}
        />
      </LandscapeOnlyImageContainer>
      <ActionButton>VISIT THE HOSPITAL</ActionButton>
    </>
  );
}

const PortraitOnlyImageContainer = styled("div", {
  width: "100%",
  paddingBottom: "calc( 100% * 309 / 548)",
  position: "relative",
  "@media screen and (orientation: portrait)": {
    display: "block",
  },
  "@media screen and (orientation: landscape)": {
    display: "none",
  },
});

const LandscapeOnlyImageContainer = styled("div", {
  width: "100%",
  paddingBottom: "calc( 100% * 441 / 800)",
  position: "relative",
  "@media screen and (orientation: portrait)": {
    display: "none",
  },
  "@media screen and (orientation: landscape)": {
    display: "block",
  },
});

const ActionButton = styled("div", {
  minHeight: "var(--button-minimum-height)",

  /* 0.121875rem(1.95px) @ 20rem(320px) increasing to 0.18125rem(2.9px) @ 160rem(2560px) */
  marginTop:
    "clamp(0.121875rem, calc(0.121875rem + ((1vw - 0.2rem) * 0.0424)), 0.18125rem)",

  paddingLeft: "var(--button-horizontal-padding)",
  paddingRight: "var(--button-horizontal-padding)",
  paddingTop: "var(--button-vertical-padding)",
  paddingBottom: "var(--button-vertical-padding)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  letterSpacing: "-0.68px",

  fontSize: "$0",
  fontWeight: "$bold",
  lineHeight: "$none",
  backgroundColor: "var(--color-secondary-button-background)",
  color: "white",
  textAlign: "center",

  letterSpacing: "0.78px",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "var(--color-secondary-button-background-hover)",
    },
  },
});
