import { Fragment } from "react";
import { motion } from "framer-motion";

import { styled } from "@theme";

import { MenuItem } from "./menu-item";

import { dataMenu } from "../data-menu";

// Example: https://github.com/framer/motion/blob/b93558c7f81348580286ed637651f307b5320117/dev/examples/heightAutoFromDisplayNone.tsx
const variants = {
  open: {
    display: "block",
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    height: 0,
    display: "none",
    // transitionEnd: { display: "none" },
    // transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }) => (
  <MotionUnorderedList variants={variants}>
    {dataMenu.map((menu) => (
      <Fragment key={menu.path}>
        <MenuItem item={menu} toggle={toggle} />
      </Fragment>
    ))}
  </MotionUnorderedList>
);

const MotionUnorderedList = styled(motion.ul, {
  margin: "0px",
  padding: "12%",
  position: "absolute",
  top: "calc(2* var(--header-vertical-padding))",
  width: "100%",

  backgroundColor: "black",
  color: "white",
});
