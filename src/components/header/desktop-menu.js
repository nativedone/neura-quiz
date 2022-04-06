import Link from "next/link";

import { styled } from "@theme";

import { dataMenu } from "./data-menu";

export function DesktopMenu() {
  return (
    <UnorderedList>
      {dataMenu.map((menu) => (
        <ListItem key={menu.path}>
          <Link href={menu.path} passHref>
            <a className={menu.variant}>
             {menu.label}
            </a>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

const UnorderedList = styled("ul", {
  justifyContent: "flex-end",
  alignItems: "center",
  color: "var(--color-secondary-button-text)",
  fontWeight: "$bold",
  fontSize: "$1",

  /* Safari resize fix */
  minHeight: "0vw",

  display: "none",

  "@7": {
    display: "flex",
  },
});

const ListItem = styled("li", {
  position: "relative",

  /* Safari resize fix */
  minHeight: "0vw",

  a: {
    lineHeight: "$loose",

    paddingLeft: "var(--button-horizontal-padding)",
    paddingRight: "var(--button-horizontal-padding)",
    // paddingTop: "var(--button-vertical-padding)",
    // paddingBottom: "var(--button-vertical-padding)",
    display: "flex",
    alignItems: "center",

    letterSpacing: "-0.68px",

    whiteSpace: "nowrap",

    "&.bold-link": {
      fontSize: "$2",
      fontWeight: "$bold",
    },
    "&.primary-button-link": {
      fontSize: "$0",
      fontWeight: "$bold",
      backgroundColor: "var(--color-primary-button-background)",

      /* 0.22875rem(3.66px) @ 20rem(320px) increasing to 0.5625rem(9px) @ 160rem(2560px) */
      marginLeft:
        "clamp(0.22875rem, calc(0.22875rem + ((1vw - 0.2rem) * 0.2384)), 0.5625rem)",

      letterSpacing: "0.78px",

      "@media (hover: hover) and (pointer: fine)": {
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "var(--color-primary-button-background-hover)",
        },
      },
    },
    "&.secondary-button-link": {
      fontSize: "$0",
      fontWeight: "$bold",
      backgroundColor: "var(--color-secondary-button-background)",
      marginLeft: "calc(var(--x) - var(--button-horizontal-padding))",

      letterSpacing: "0.78px",

      "@media (hover: hover) and (pointer: fine)": {
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "var(--color-secondary-button-background-hover)",
        },
      },
    },
  },
});
