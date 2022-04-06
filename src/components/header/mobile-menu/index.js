import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useClickAway } from "react-use";

import { styled } from "@theme";

import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";

export const MobileMenu = ({ headerVariant }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useClickAway(containerRef, () => {
    if (isOpen) {
      toggleOpen();
    }
  });

  return (
    <MobileMenuContainer>
      <MotionNav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </MotionNav>
    </MobileMenuContainer>
  );
};

const MobileMenuContainer = styled("div", {
  justifyContent: "flex-end",
  alignItems: "center",
  color: "var(--color-secondary-button-text)",
  fontWeight: "$normal",
  fontSize: "$1",

  /* Safari resize fix */
  minHeight: "0vw",

  display: "block",

  "@7": {
    display: "none",
  },
});

const MotionNav = styled(motion.nav, {
  position: "absolute",
  top: "0px",
  right: "-12.5vw",
  left: "-12.5vw",
  height: "var(--header-height)",

  zIndex: 1000,
});
