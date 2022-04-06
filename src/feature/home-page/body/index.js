import dynamic from "next/dynamic";
import { styled } from "@theme";

import { useState } from "react";

const Carousel = dynamic(() =>
  import("./carousel").then((mod) => mod.Carousel)
);
const BodyContent = dynamic(() =>
  import("./body-content").then((mod) => mod.BodyContent)
);
const Aside = dynamic(() => import("./aside").then((mod) => mod.Aside));
const TestimonyAuthor = dynamic(() =>
  import("./testimony").then((mod) => mod.TestimonyAuthor)
);
const TestimonyQuote = dynamic(() =>
  import("./testimony").then((mod) => mod.TestimonyQuote)
);
const BackgroundVideo = dynamic(() =>
  import("../background-video").then((mod) => mod.BackgroundVideo)
);

import { Container } from "@components/container";

export function Body() {
  const [start, setStart] = useState();
  return (
    <BodyContainer onClick={() => setStart(!start)}>
      <BackgroundVideo start={start} />
      {/* <Container size={35}>
        <div style={{ width: 100, height: 100 }} />
      </Container>
      <Container size={50}>
        <div style={{ width: 100, height: 100 }} />
      </Container>
      <Container size={67}>
        <div style={{ width: 100, height: 100 }} />
      </Container>
      <Container size={75}>
        <div style={{ width: 100, height: 100 }} />
      </Container>
      <Container size={85}>
        <div style={{ width: 100, height: 100 }} />
      </Container>

      <div style={{ width: 100, height: 100 }} />

      <Container size={85}>
        <Container size={75}>
        <Container size={67}>
        <Container size={50}>
        <Container size={35}>
          <div style={{ width: 100, height: 100 }} />
        </Container>
        </Container>
        </Container>
        </Container>
      </Container> */}
      {/* <Hero start={start} /> */}
    </BodyContainer>
  );
}

const BodyContainer = styled("div", {
  overflow: "hidden",
});
