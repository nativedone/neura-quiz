import { styled } from "@theme";

export function BackgroundVideoMobile({ hasStarted }) {
  return (
    <Video
      autoPlay={true}
      preload="auto"
      muted={true}
      loop={true}
      playsInline={true}
      className={hasStarted ? "zoom-out" : ""}
    >
      <source src="/assets/video-mobile-922-1920.mp4#t=2" type="video/mp4" />
    </Video>
  );
}

const Video = styled("video", {
  width: "100%",
  height: "100%",
  transform: "scale(1.8) translate3d(0, 20%, 0)",
  willChange: "transform", // Let the browser know what will change so it can optimize
  
  
  transition: "transform 600ms", // 1.2 sec
  
  "&.zoom-out": {
  transform: "scale(0.5) translate3d(0, -19%, 0)",
  },
});
