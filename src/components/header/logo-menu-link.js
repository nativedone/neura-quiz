import Link from "next/link";

import { styled } from "@theme";

export function LogoMenuLink() {
  return (
    <Link href="/" passHref>
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
