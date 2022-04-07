import { styled } from "@theme";
import { Share } from "@components/share";

import { LogoMenuLink } from "./logo-menu-link";

export function Header() {
  return (
    <SemanticHeader>
      <SemanticNav>
        <LogoMenuLink />

        <Share />
      </SemanticNav>
    </SemanticHeader>
  );
}

const SemanticHeader = styled("header", {
  backgroundColor: "transparent",

  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "$50",

  height: "$3x_2",
  "@3": {
    height: "$x_2",
  },
});

const SemanticNav = styled("nav", {
  height: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",

  position: "relative",

  margin: "0 auto",
  width: "85vw",

  "@3": {
    justifyContent: "flex-end",
    width: "67vw",
  },
});
