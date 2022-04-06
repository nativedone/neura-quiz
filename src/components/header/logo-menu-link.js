import { styled } from "@theme";

import { Logo } from "@components/logo";
import { VisuallyHidden } from "@components/visually-hidden";

export function LogoMenuLink() {
  return (
    <LogoContainer href="https://msf.org.au/" target="_blank" rel="noreferrer">
      <Logo />
      <VisuallyHidden>Go back to homepage</VisuallyHidden>
    </LogoContainer>
  );
}

const LogoContainer = styled("a", {
  display: "flex",

  fontSize: "var(--header-logo-height)",

  /* Safari resize fix */
  minHeight: "0vw",
});
