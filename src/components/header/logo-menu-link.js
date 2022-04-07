import Link from "next/link";

import { styled } from "@theme";

import { LogoHome } from "@components/logo";

export function LogoMenuLink() {
  return (
    <Link href="/" passHref>
      <LogoContainer>
        <LogoHome>Take quiz</LogoHome>
      </LogoContainer>
    </Link>
  );
}

const LogoContainer = styled("a", {
  display: "flex",

  // TODO: update based on design
  fontSize: "var(--header-logo-height)",

  /* Safari resize fix */
  minHeight: "0vw",
});
