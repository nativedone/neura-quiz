import { styled } from "@theme";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const SCROLLBAR_SIZE = 8;

const ScrollArea = styled(ScrollAreaPrimitive.Root, {
  overflow: "hidden",
  margin: "auto",
  width: "85vw",

  variants: {
    sizeVariant: {
      small: {
        height: "45vh",
      },
      medium: {
        height: "62vh",

        "@1": {
          height: "67vh",
        },
        "@2": {
          height: "62vh",
        },
        "@3": {
          height: "80vh",
        },
        "@6": {
          height: "65vh",
        },
        "@7": {
          height: "78vh",
        },
        "@9": {
          height: "70vh",
        },
      },
      large: {
        height: "100vh",
      },
    },
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
    sizeVariant: "small",
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
  background: "transparent",
  transition: "background 160ms ease-out",
  "&:hover": { background: "rgba(0, 0, 0, 0.7)" },
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

export const ScrollAreaContainer = ({ children, size, radius }) => (
  <ScrollArea
    type="auto"
    body-scroll-lock-ignore="true"
    sizeVariant={size}
    radiusVariant={radius}
  >
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
