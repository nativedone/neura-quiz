import { styled } from "@theme";

export function BackgroundVideoMobile({ hasStarted }) {
  return (
    <Video autoPlay muted loop playsInline className={hasStarted ? "zoom-out" : ""}>
      <source src="/assets/neura-extended-video-1920x4000.webm" type="video/mp4" />
    </Video>
  );
}

const Video = styled("video", {
  width: "100%",
  height: "100%",
  transform: "scale(1.8) translateY(20%)", 
  
  transition: "all 900ms",
  
  "&.zoom-out": {
    transform: "scale(0.5) translateY(-20%)",
    // transform: "scale(0.5) translateY(-4%)",
  },
});
