import Link from "next/link";
import Router, { useRouter } from "next/router";

import { styled } from "@theme";

export function LogoMenuLink() {
  const route = useRouter();

  const { restart } = route.query;

  return (
    <div
      onClick={() =>
        Router.push(
          {
            query: { restart: restart ? parseInt(restart, 10) + 1 : 1 },
          },
          undefined,
          // shallow avoids double re-render
          { scroll: false, shallow: true }
        )
      }
    >
      <LogoHome>Quiz</LogoHome>
    </div>
  );
  return (
    <Link href="/" passHref replace={true} shallow={true}>
      <LogoHome>Quiz</LogoHome>
    </Link>
  );
}

const LogoHome = styled("a", {
  display: "flex",

  color: "white",
  fontSize: "$-1",
  fontWeight: "$normal",
  lineHeight: "100%",

  /* Safari resize fix */
  minHeight: "0vw",
});
