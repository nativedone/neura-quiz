import dynamic from "next/dynamic";
import { styled } from "@theme";

const BackgroundVideoMobile = dynamic(() =>
  import("./background-video-mobile").then((mod) => mod.BackgroundVideoMobile)
);
const BackgroundVideoDesktop = dynamic(() =>
  import("./background-video-desktop").then((mod) => mod.BackgroundVideoDesktop)
);

export function BackgroundVideo({ start }) {
  return (
    <BackgroundVideoContainer>
      <PortraitOnly>
        <BackgroundVideoMobile start={start} />
      </PortraitOnly>

      <LandscapeOnly>
        <BackgroundVideoDesktop />
      </LandscapeOnly>
    </BackgroundVideoContainer>
  );
}

const BackgroundVideoContainer = styled("div", {
  overflow: "hidden",

  // https://stackoverflow.com/questions/27850472/html5-video-background-keep-center-of-video-in-center
  position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",

  backgroundColor: '#1E2C38'

});

const PortraitOnly = styled("div", {
  "@media screen and (orientation: portrait)": {
    display: "block",
  },
  "@media screen and (orientation: landscape)": {
    display: "none",
  },
});

const LandscapeOnly = styled("div", {
  "@media screen and (orientation: landscape)": {
    display: "block",
  },
  "@media screen and (orientation: portrait)": {
    display: "none",
  },
});
