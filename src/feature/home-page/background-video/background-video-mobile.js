import { styled } from "@theme";

// export function BackgroundVideoMobile({ hasStarted }) {
//   return (
//     <Video autoPlay muted loop playsInline className={hasStarted ? "zoom-out" : ""}>
//       {/* <source src="/assets/neura-extended-video-480x1000.mp4" type="video/mp4" /> */}
//       <source src="/assets/video-extended-960x2000-500k.mp4" type="video/mp4" />
//       {/* <source src="/assets/neura-extended-video-1920x4000.mp4" type="video/mp4" /> */}
//     </Video>
//   );
// }

// const Video = styled("video", {
//   width: "100%",
//   height: "100%",
//   transform: "scale(1.8) translateY(20%)", 
  
//   transition: "transform 1200ms", // 1.2 sec
  
//   "&.zoom-out": {
//     transform: "scale(0.5) translateY(-27%)",
//   },
// });


export function BackgroundVideoMobile() {
  return (
    <Video autoPlay muted loop playsInline>
      <source
        src="/assets/video-extended-960x2000-500k.mp4"
        type="video/mp4"
      />
    </Video>
  );
}

const Video = styled("video", {
  width: "200vw",
  height: "200vh", // set the expected aspect ratio based on viewport width
  // height: "auto",
  // transform: "scale(1.8) translateY(20%)", 

  //   transition: "transform 1200ms", // 1.2 sec
  
  // "&.zoom-out": {
  //   transform: "scale(0.5) translateY(-27%)",
  // },
});
