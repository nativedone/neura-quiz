import { styled } from "@theme";

export const Container = styled("div", {
  margin: "0 auto",

  variants: {
    size: {
      35: {
        width: "35vw",
        backgroundColor: "pink",
      },
      50: {
        width: "50vw",
        backgroundColor: "red",
      },
      67: {
        width: "67vw",
        backgroundColor: "blue",
      },
      75: {
        width: "75vw",
        backgroundColor: "yellow",
      },
      85: {
        width: "85vw",
        backgroundColor: "orange",
      },
    }
  }
});

