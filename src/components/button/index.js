import { styled } from "@theme";

export const Button = styled("button", {
  
  paddingTop: "$x_4",
  paddingBottom: "$x_4",
  paddingLeft: "$x_2",
  paddingRight: "$x_2",

  outline: "2px solid white",

  "@3": {
    paddingTop: "$x_8",
    paddingBottom: "$x_8",
    paddingLeft: "$x_4",
    paddingRight: "$x_4",
  },
  color: 'white',
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  fontSize: "$3",
  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      color: "black",
    },
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
    },
  },

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      color: "black",
    },
  },
});
