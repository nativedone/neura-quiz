import { motion } from "framer-motion";
import Link from "next/link";

import { styled } from "@theme";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item, className, toggle }) => {
  return (
    <MotionListItem
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      className={className || ""}
    >
      <Link href={item.path}>
        <a onClick={toggle} className={item.variant}>
          {item.label}
        </a>
      </Link>
    </MotionListItem>
  );
};

const MotionListItem = styled(motion.li, {
  margin: "0px",
  padding: "0px",
  listStyle: "none",
  marginBottom: "0.5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  fontWeight: "$normal",
  fontSize: "$0",

  a: {
    lineHeight: '$same',

    paddingLeft: "var(--button-horizontal-padding)",
    paddingRight: "var(--button-horizontal-padding)",
    paddingTop: "var(--button-vertical-padding)",
    paddingBottom: "var(--button-vertical-padding)",
    display: "flex",
    alignItems: "center",

    letterSpacing: "-0.68px",

    "&.bold-link": {
      fontSize: "$2",
      fontWeight: "$bold",
    },
    "&.primary-button-link": {
      fontSize: "$0",
      fontWeight: "$bold",
      backgroundColor: "var(--color-primary-button-background)",

      letterSpacing: "0.78px",
    },
    "&.secondary-button-link": {
      fontSize: "$0",
      fontWeight: "$bold",
      backgroundColor: "var(--color-secondary-button-background)",

      letterSpacing: "0.78px",
    },
  },
});
