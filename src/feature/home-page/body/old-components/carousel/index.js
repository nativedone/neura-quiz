import dynamic from "next/dynamic";

import { styled } from "@theme";

const CarouselMobile = dynamic(() =>
  import("./carousel-mobile").then((mod) => mod.CarouselMobile)
);
const CarouselDesktop = dynamic(() =>
  import("./carousel-desktop").then((mod) => mod.CarouselDesktop)
);

export function Carousel() {
  return (
    <CarouselContainer>
      <CarouselMobileOnlyContainer>
        <CarouselMobile />
      </CarouselMobileOnlyContainer>

      <CarouselDesktopOnlyContainer>
        <CarouselDesktop />
      </CarouselDesktopOnlyContainer>
    </CarouselContainer>
  );
}

const CarouselContainer = styled("div", {
  gridArea: "carousel",
  marginTop: "$x_2",
  marginBottom: "$3x_8",
});

const CarouselMobileOnlyContainer = styled("div", {
  display: "block",

  "@3": {
    display: "none",
  },
});

const CarouselDesktopOnlyContainer = styled("div", {
  display: "none",

  "@3": {
    display: "block",
  },
});
