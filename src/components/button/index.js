import { styled } from "@theme";

export const Button = styled("button", {
  paddingTop: "$x_4",
  paddingBottom: "$x_4",
  paddingLeft: "$x_2",
  paddingRight: "$x_2",

  border: "2px solid white",

  "@3": {
    paddingTop: "$x_8",
    paddingBottom: "$x_8",
    paddingLeft: "$x_4",
    paddingRight: "$x_4",
  },
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  fontSize: "$3",
  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      color: "black",
    },
  },

  "+ button": {
    borderTop: "none",
  },

  variants: {
    variant: {
      primary: {
        fontSize: "$3",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
      secondary: {
        fontSize: "$0",
        backgroundColor: "transparent",
      },
      accent: {
        fontSize: "$0",
        backgroundColor: "rgb(166, 0, 50)",
        border: "0px solid rgb(0, 0, 0)",
        margin: "0 auto",
        overflow: "hidden",

        "@media (hover: hover) and (pointer: fine)": {
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(166, 0, 50)",
            color: "white",
          },
        },
      },
    },
    hidden: {
      true: {
        visibility: "hidden",
      },
    },
  },
});
