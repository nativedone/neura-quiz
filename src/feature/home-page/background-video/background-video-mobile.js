import { styled } from "@theme";

export function BackgroundVideoMobile({ start }) {
  return (
    <Video autoPlay muted loop playsInline className={start ? "zoom-out" : ""}>
      <source src="/assets/video-2000k.mp4" type="video/mp4" />
    </Video>
  );
}

const Video = styled("video", {
  width: "100%",
  height: "100%",
  transform: "scale(4) translateY(50%)",
  transition: "all 700ms",

  "&.zoom-out": {
    transform: "scale(0.5)  translateY(70%)",
  },
});
