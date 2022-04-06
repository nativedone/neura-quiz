import { useEffect, useState } from "react";
import { useViewportScroll, motion } from "framer-motion";
import useDebounce from "react-use/lib/useDebounce";

import { styled } from "@theme";
import { LargeContainer } from "@components/container";

import { LogoMenuLink } from "./logo-menu-link";
import { MobileMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";

const headerAnimationVariants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: "-100%" },
};

export function Header({ shouldSticky, animateOnScroll }) {
  const { scrollY } = useViewportScroll();

  const [currentScroll, setCurrentScroll] = useState(0);
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [debouncedPreviousScroll, setDebouncedPreviousScroll] = useState(0);

  const [, clearDebounceListener] = useDebounce(
    () => {
      setDebouncedPreviousScroll(currentScroll);
    },
    100,
    [currentScroll]
  );

  useEffect(() => {
    if (!animateOnScroll) {
      return;
    }

    function updateScroll() {
      const y = scrollY.get();

      setCurrentScroll(y);
      const delta = y - debouncedPreviousScroll;

      if (delta > 0) {
        setHeaderVisibility(false);
      } else {
        setHeaderVisibility(true);
      }
    }

    const unsubscribeScrollY = scrollY.onChange(updateScroll);

    return () => {
      unsubscribeScrollY();
      clearDebounceListener();
    };
  }, [animateOnScroll, debouncedPreviousScroll, clearDebounceListener]);

  return (
    <MotionHeaderContainer
      animate={isHeaderVisible ? "show" : "hide"}
      variants={headerAnimationVariants}
      className={shouldSticky ? "is-sticky" : ""}
    >
      <SemanticHeader>
        <LargeContainer>
          <SemanticNav>
            <LogoMenuLink />

            <MobileMenu />
            <DesktopMenu />
          </SemanticNav>
        </LargeContainer>
      </SemanticHeader>
    </MotionHeaderContainer>
  );
}

const MotionHeaderContainer = styled(motion.div, {
  backgroundColor: "transparent",

  "&.is-sticky": {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",

    // TODO: add z-index structure level to theme.js
    zIndex: 999999,
  },
});

const SemanticHeader = styled("header", {
  transition: "all 0.3s ease-in-out 0s",
  backgroundColor: "black",

  height: "var(--header-height)",
  display: "flex",
  alignItems: "center",
});

const SemanticNav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  position: "relative",
});
