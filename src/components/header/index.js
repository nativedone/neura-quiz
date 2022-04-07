import { styled } from "@theme";
import { Container } from "@components/container";

import { LogoMenuLink } from "./logo-menu-link";

export function Header() {
  return (
    <MotionHeaderContainer>
      <SemanticHeader>
        <Container>
          <SemanticNav>
            <LogoMenuLink />

            {/* Add share button here */}
          </SemanticNav>
        </Container>
      </SemanticHeader>
    </MotionHeaderContainer>
  );
}

const MotionHeaderContainer = styled("div", {
  backgroundColor: "transparent",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "$50"
});

const SemanticHeader = styled("header", {
  backgroundColor: "red", //TODO: remove backgroundColor

  height: "var(--header-height)", //TODO:  update value for header height o global.css
  display: "flex",
  alignItems: "center",
});

const SemanticNav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  position: "relative",
});
