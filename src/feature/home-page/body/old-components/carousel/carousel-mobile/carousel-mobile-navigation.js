import { styled } from "@theme";

import { VisuallyHidden } from "@components/visually-hidden";

export function CarouselMobileNavigation({ index, data, slideTo }) {
  return (
    <MobileNavigationContainer>
      {data.map((_, i) => (
        <button
          key={`nav${i}`}
          onClick={() => slideTo(i)}
          className={i === index ? "active" : ""}
        >
          <VisuallyHidden>{`Go to slide ${i + 1}`}</VisuallyHidden>
        </button>
      ))}
    </MobileNavigationContainer>
  );
}

const MobileNavigationContainer = styled("div", {
  zIndex: 1, // this is necessary because the swiper/react slider stays on top

  /* 0.625rem(10px) @ 20rem(320px) increasing to 3.1875rem(51px) @ 160rem(2560px) */
  "--size":
    "clamp(0.625rem, calc(0.625rem + ((1vw - 0.2rem) * 1.8304)), 3.1875rem)",

  /* Safari resize fix */
  minHeight: "0vw",

  position: "absolute",
  bottom: "4.3%",
  left: "50%",
  transform: "translateX(-50%)",

  display: "flex",

  "--mobile-margin-left": "16px",

  button: {
    borderColor: "white",
    borderWidth: "1px",
    borderStyle: "solid",
    width: "var(--size)",
    height: "var(--size)",
    borderRadius: "$full",
    backgroundColor: "transparent",
    position: "relative",

    "&.active": {
      backgroundColor: "var(--color-primary-button-background)",
      borderColor: "var(--color-primary-button-background)",
    },

    "+ button": {
      marginLeft: "var(--mobile-margin-left)",
    },
  },
});
