// import { useRef, useEffect } from 'react'

import { styled } from "@theme";

export function BackgroundVideoMobile({ hasStarted }) {
  // const ref = useRef();

  // useEffect(() => {
  //   if(!ref || !ref.current) {
  //     return
  //   }

  //   console.log("ref", ref)
  //   console.log("ref.current", ref.current)

  //   ref.current.playbackRate = 0.5;

  //   // ref.current?.playbackRate = 0.5;
  // })




  return (
    <Video autoPlay muted loop playsInline className={hasStarted ? "zoom-out" : ""}>
      <source src="/assets/neura-extended-video-480x1000.mp4" type="video/mp4" />
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
