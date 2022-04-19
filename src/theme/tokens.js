export const tokens = {
  theme: {
    colors: {
      // gray400: "gainsboro",
      // gray500: "lightgray",
      // red900: "#F00",
    },
    fonts: {
      neo_sans: "neo-sans, Helvetica, Arial, sans-serif",
    },
    fontSizes: {
      "-6": "var(--step--6)",
      "-5": "var(--step--5)",
      "-4": "var(--step--4)",
      "-3": "var(--step--3)",
      "-2": "var(--step--2)",
      "-1": "var(--step--1)",
      0: "var(--step-0)",
      1: "var(--step-1)",
      2: "var(--step-2)",
      3: "var(--step-3)",
      4: "var(--step-4)",
      5: "var(--step-5)",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      none: "0", // useful for SOME buttons with one line text
      same: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    space: {
      x_16: "calc( 1 / 16 * var(--x))", // 0.0625
      x_8: "calc( 1 / 8 * var(--x))", // 0.125
      x_4: "calc( 1 / 4 * var(--x))", // 0.25
      x_2: "calc( 1 / 2 * var(--x))", // 0.50
      x: "var(--x)",
      "3x_2": "calc( 3 / 2 * var(--x))", // 1.5
      "2x": "calc( 2 * var(--x))",
      "3x": "calc( 3 * var(--x))",
    },
    radii: {
      none: "0px",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      full: "9999px",
    },
    zIndices: {
      //TODO: apply these z-indexes
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
  },
  media: {
    // 0: '(min-width: 0px)', // Unnecessary for  x-small phones
    1: "(min-width: 350px)", // small phones
    2: "(min-width: 400px)", // large phones
    3: "(min-width: 576px)", // x-large phones & small tablets
    4: "(min-width: 700px)", // medium tablets
    5: "(min-width: 992px)", // large tablets (ipad mini & pro)
    6: "(min-width: 1200px)", // x-large tablet & small desktop
    7: "(min-width: 1400px)", // medium desktop
    8: "(min-width: 1900px)", // large desktops
    9: "(min-width: 2000px)", // x-large desktops
  },
};

// "@1": {
//   backgroundColor: "red",
// },
// "@2": {
//   backgroundColor: "blue",
// },
// "@3": {
//   backgroundColor: "green",
// },
// "@4": {
//   backgroundColor: "yellow",
// },

// "@5": {
//   backgroundColor: "pink",

// },
// "@6": {
//   backgroundColor: "purple",
// },
// "@7": {
//   backgroundColor: "gray",
// },
// "@8": {
//   backgroundColor: "black",
// },
// "@9": {
//   backgroundColor: "orange",
// },
