import { useEffect, useRef, useState } from "react";
import { styled } from "@theme";

import { Modal } from "@components/modal";
import { WatchCallToAction } from "./watch-call-to-action";

import { VolumeMuted, VolumeUp } from "@components/volume-icons";

export function HospitalVideo() {
  return (
    <Modal OpenOnClickElement={WatchCallToAction}>
      <ResponsiveHospitalVideo />
    </Modal>
  );
}

function ResponsiveHospitalVideo() {
  const [muted, toggleAudio] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    let video = videoRef.current;
    if (video && video.play) {
      video.play();
    }

    // Pause the video if leaves the viewport area
    return () => {
      if (video && video.pause) {
        video.pause();
      }
    };
  }, [videoRef]);

  return (
    <HospitalVideoContainer>
      <video ref={videoRef} loop muted={muted} playsInline>
        <source src="/assets/msf2000.mp4" type="video/mp4" />
      </video>

      <ToggleAudio
        onClick={() => {
          toggleAudio((prev) => !prev);
        }}
      >
        {muted ? <VolumeMuted /> : <VolumeUp />}
      </ToggleAudio>
    </HospitalVideoContainer>
  );
}

const HospitalVideoContainer = styled("div", {
  position: "relative",
  "--mobile-video-width": "90vw",
  "--desktop-video-width": "60vw",
  "--video-aspect-ratio": "calc(309 / 548)",

  "--mobile-video-height":
    "calc(var(--mobile-video-width) * var(--video-aspect-ratio))",
  "--desktop-video-height":
    "calc(var(--desktop-video-width) * var(--video-aspect-ratio))",

  video: {
    backgroundColor: "#000000",
    width: "var(--mobile-video-width)",
    height: "var(--mobile-video-height)",

    "@5": {
      width: "var(--desktop-video-width)",
      height: "var(--desktop-video-height)",
    },
  },
});

const ToggleAudio = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "$full",
  backgroundColor: "rgba(33, 33, 33, 0.3)",
  minHeight: "0vw",

  padding: "calc(0.02* var(--mobile-video-width))",
  bottom: "calc(0.04* var(--mobile-video-width))",
  right: "calc(0.02* var(--mobile-video-width))",
  fontSize: "calc(0.04* var(--mobile-video-width))",

  "@5": {
    padding: "calc(0.007* var(--desktop-video-width))",
    bottom: "calc(0.015* var(--desktop-video-width))",
    right: "calc(0.007* var(--desktop-video-width))",
    fontSize: "calc(0.02* var(--desktop-video-width))",
  },
});
