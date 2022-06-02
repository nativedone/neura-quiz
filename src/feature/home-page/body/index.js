import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { styled } from "@theme";

import { useState, useEffect } from "react";

import * as gtag from "@lib/gtm";

import { Button } from "@components/button";

const BackgroundVideo = dynamic(() =>
  import("../background-video").then((mod) => mod.BackgroundVideo)
);

const SubscribeForm = dynamic(() =>
  import("../subscribe-form").then((mod) => mod.SubscribeForm)
);

const Quiz = dynamic(() => import("../quiz").then((mod) => mod.Quiz));

// -------- States
// idle: user has landed into the page
// subscribing: user is filling in the consent form
// answering: user is answering the quiz

export function Body() {
  const [state, setState] = useState("idle");

  const route = useRouter();
  const { restart, started } = route.query;
  const skipForm = started === 'yes';

  useEffect(() => {
    if (state === "idle") {
      return;
    }

    let trackingStep = {
      category: "Buttons",
      action: "Click",
      label: "Clicked Take The Quiz button",
    };

    if (state === "answering") {
      trackingStep = {
        category: "Forms",
        action: "Submit",
        label: "Submitted the form to start the quiz",
      };
    }

    gtag.event(trackingStep);
  }, [state]);

  useEffect(() => {
    if (!restart & !skipForm) {
      return;
    }
    if (!skipForm) {
      setState("idle");
      return;
    }

    setState("answering");
  }, [restart, skipForm]);
  
  return (
    <BodyContainer className={state}>
      {state === "idle" && (
        <ButtonContainer>
          <Button onClick={() => setState("subscribing")}>TAKE THE QUIZ</Button>
        </ButtonContainer>
      )}

      {state === "subscribing" && (
        <SubscribeForm onSuccess={() => setState("answering")} />
      )}

      {state === "answering" && <Quiz />}
      <BackgroundVideo hasStarted={state !== "idle"} />
    </BodyContainer>
  );
}

const BodyContainer = styled("div", {
  overflow: "hidden",

  position: "relative",

  display: "flex",
  justifyContent: "center",

  paddingTop: "$x",
  paddingBottom: "$x",

  // backgroundColor: "red",

  width: "100vw",
  height: "100vh",

  alignItems: "flex-end",
  "&.idle": {
    alignItems: "center",
  },
});

const ButtonContainer = styled("div", {
  zIndex: "$50",
});
