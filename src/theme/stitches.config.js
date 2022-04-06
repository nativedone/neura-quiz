import { createStitches } from "@stitches/react";

import { tokens } from "./tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches(tokens);
