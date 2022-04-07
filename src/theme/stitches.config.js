import { createStitches } from "@stitches/react";

import { tokens } from "./tokens";

const withSizes = { ...tokens, theme: { ...tokens.theme, sizes: { ...tokens.theme.space } } };

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches(withSizes);
