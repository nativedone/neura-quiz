import { styled } from "@theme";

export function BackgroundVideoDesktop() {
  return (
    <Video autoPlay muted loop playsInline>
      <source src="/assets/video-2000k.mp4" type="video/mp4" />
    </Video>
  );
}

const Video = styled("video", {
  // https://stackoverflow.com/questions/27850472/html5-video-background-keep-center-of-video-in-center
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  margin: "auto",
  minHeight: "50%",
  minWidth: "50%",
});
