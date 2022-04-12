import { styled } from "@theme";

export function BackgroundVideoMobile({ start }) {
  return (
    <Video autoPlay muted loop playsInline className={start ? "zoom-out" : ""}>
      <source src="/assets/neura-extended-video_1.mp4" type="video/mp4" />
    </Video>
  );
}

const Video = styled("video", {
  width: "100%",
  height: "100%",
  transform: "scale(1.8) translateY(35%)", 

  transition: "all 900ms",

  "&.zoom-out": {
    transform: "scale(0.5) translateY(-2%)",
  },
});
