import { styled } from "@theme";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const SCROLLBAR_SIZE = 10;

const ScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: "85vw",
  height: "45vh",
  maxHeight: "45vh",
  overflow: "hidden",
  margin: "auto",

  variants: {
    radiusVariant: {
      none: {
        borderRadius: "$none",
      },
      rounded: {
        borderRadius: "$2xl",
      },
    },
  },
  defaultVariants: {
    radiusVariant: "rounded",
  },

  "@3": {
    width: "35vw",
  },
});

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  //   background: "hsl(0 0% 88.7%)",
  background: "transparent",
  //   background: "rgba(0, 0, 0, 0.5)",
  transition: "background 160ms ease-out",
  "&:hover": { background: "rgba(0, 0, 0, 0.5)" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
  zIndex: "$50",
});

const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: "hsl(253 3.5% 53.5%)",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner, {
  background: "hsl(0 0% 78.0%)",
});

export const ScrollAreaContainer = ({ children, radius }) => (
  <ScrollArea type="auto" body-scroll-lock-ignore="true" radiusVariant={radius}>
    <ScrollAreaViewport
      css={{ backgroundColor: "transparent" }}
      body-scroll-lock-ignore="true"
    >
      {children}
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollArea>
);
