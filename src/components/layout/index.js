import { styled } from "@theme";

import { Header } from "@components/header";
import { Main } from "@components/main";
import { Footer } from "@components/footer";

import { DevGuidelines } from "@components/dev-guidelines";

export function Layout({
  children,
  animateHeaderOnScroll,
  shouldStickyHeader,
}) {
  return (
    <>
      <LayoutContainer>
        {/* <Header
          animateOnScroll={animateHeaderOnScroll}
          shouldSticky={shouldStickyHeader}
        /> */}
        <Main>{children}</Main>
        {/* <Footer /> */}
        {/* <DevGuidelines /> */}
      </LayoutContainer>
    </>
  );
}

const LayoutContainer = styled("div", {
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
});
