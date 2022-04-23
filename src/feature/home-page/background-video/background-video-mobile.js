import { styled } from "@theme";

import { useEffect, useRef, useState } from "react";

// export function BackgroundVideoMobile({ hasStarted }) {
//   return (
//     <Video autoPlay muted loop playsInline className={hasStarted ? "zoom-out" : ""}>
//       {/* <source src="/assets/neura-extended-video-480x1000.mp4" type="video/mp4" /> */}
//       <source src="/assets/video-extended-960x2000-500k.mp4" type="video/mp4" />
//       {/* <source src="/assets/neura-extended-video-1920x4000.mp4" type="video/mp4" /> */}
//     </Video>
//   );
// }``

// const Video = styled("video", {
//   width: "100%",
//   height: "100%",
//   transform: "scale(1.8) translateY(20%)",

//   transition: "transform 1200ms", // 1.2 sec

//   "&.zoom-out": {
//     transform: "scale(0.5) translateY(-27%)",
//   },
// });

export function BackgroundVideoMobile({ hasStarted }) {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef && videoRef.current && videoRef.current.play) {
  //     videoRef.current.play();
  //   }
  // }, [ videoRef]);

  return (
    <Video
      autoPlay={true}
      preload="auto"
      muted={true}
      loop={true}
      playsInline={true}
      ref={videoRef}
      className={hasStarted ? "zoom-out" : ""}
    >
      <source src="/assets/922×1920.mp4" type="video/mp4" />
      {/* <source src="/assets/output-youtube.mp4" type="video/mp4" /> */}
      {/* <source src="/assets/output-960x2000-500k.mp4" type="video/mp4" /> */}

      {/* <source
        src="/assets/video-extended-960x2000-500k.mp4"
        type="video/mp4"
      /> */}
    </Video>
  );
}

const Video = styled("video", {
  width: "100%",
  height: "100%",
  // transform: "scale(1.8) translateY(20%)",
  transform: "scale(1.8) translateY(20%)",

  transition: "transform 1200ms", // 1.2 sec

  "&.zoom-out": {
    transform: "scale(0.5) translateY(-27%)",
  },
  // position: "absolute",
  // top: 0,
  // bottom: 0,
  // right: 0,
  // left: 0,
  // margin: "auto",
  // minHeight: "50%",
  // minWidth: "50%",
});
