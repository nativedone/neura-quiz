import { styled } from "@theme";
import { useSources } from "@hooks/use-sources";


export function BackgroundVideoMobile({ hasStarted }) {
  const source = useSources({
    mediaQueryType: "large_mobile_and_under",
    matchingSuccessData: "/assets/quiz-digital-model-human-brain-1920x922_10MB.HEVC.P8.webm#t=2",
    matchingFailData: "", // we don't let the browser to download the desktop video if user is on mobile
  });

  return (
    <Video
      key={source}
      autoPlay={true}
      preload="auto"
      muted={true}
      loop={true}
      playsInline={true}
      className={hasStarted ? "zoom-out" : ""}
    >
      <source src={source} type="video/webm" />
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
