import { motion } from "framer-motion";

import { styled } from "@theme";
import { VisuallyHidden } from "@components/visually-hidden";

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="2" stroke="white" {...props} />
);

export const MenuToggle = ({ toggle }) => (
  <Button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
    <VisuallyHidden>toggle mobile menu</VisuallyHidden>
  </Button>
);

const Button = styled("button", {
  "--click-size": "10px",
  padding: "var(--click-size)",
  transform: "translate( var(--click-size), calc( -1.2 * var(--click-size) ) )",
  outline: "none",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  top: "var(--header-vertical-padding)",
  right: "calc(12.5vw - 1%)",
  background: "transparent",
});
