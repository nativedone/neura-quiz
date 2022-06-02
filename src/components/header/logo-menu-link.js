import Router, { useRouter } from "next/router";

import { styled } from "@theme";
import { VisuallyHidden } from "@components/visually-hidden";

export function LogoMenuLink() {
  const route = useRouter();

  const { restart, started } = route.query;
  const skipForm = started ? { started: 'yes'} : {}

  return (
    <div
      onClick={() =>
        Router.push(
          {
            query: { restart: restart ? parseInt(restart, 10) + 1 : 1, ...skipForm },
          },
          undefined,
          // shallow avoids double re-render
          { scroll: false, shallow: true }
        )
      }
    >
      <LogoHome>
        Quiz
        <VisuallyHidden>Take the brain quiz</VisuallyHidden>
      </LogoHome>
    </div>
  );
}

const LogoHome = styled("div", {
  display: "flex",

  color: "white",
  fontSize: "$-1",
  fontWeight: "$normal",
  lineHeight: "100%",

  /* Safari resize fix */
  minHeight: "0vw",
});
