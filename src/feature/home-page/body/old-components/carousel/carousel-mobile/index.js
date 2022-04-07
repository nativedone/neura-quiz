import { useState, useCallback, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { styled } from "@theme";

import { CarouselItem } from "../carousel-item";
import { CarouselMobileNavigation } from "./carousel-mobile-navigation";

import "swiper/css";

export function CarouselMobile() {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const slideTo = useCallback(
    (value) => {
      //   console.log("useCallback value", value);
      swiperRef.current?.swiper.slideTo(value + 1);
    },
    [swiperRef]
  );

  return (
    <CarouselMobileContainer>
      <CarouselMobileInnerContainer>
        <Swiper
          ref={swiperRef}
          loop={true}
          slidesPerView={1}
          autoplay={false}
          speed={700}
          onSlideChange={(a) => {
            // console.log("slide change", a);
            // console.log("slide change realIndex", a.realIndex);
            setIndex(a.realIndex);
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={`slide key ${index}`}>
              <CarouselItem {...item} priority={index === 0} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselMobileInnerContainer>
      <CarouselMobileNavigation index={index} data={data} slideTo={slideTo} />
    </CarouselMobileContainer>
  );
}

const CarouselMobileContainer = styled("div", {
  display: "flex",
  // width: "100vw",
  justifyContent: "center",
  position: "relative",
  margin: "0 auto",
});

const CarouselMobileInnerContainer = styled("div", {
  width: "100%",
  position: "relative",
});

const data = [
  {
    url: "/assets/image-carousel-mobile-01.webp",
    blurURL: "/assets/image-carousel-mobile-01-blur.webp",
    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 320,
      height: 218,
    },
  },
  {
    url: "/assets/image-carousel-mobile-02.webp",
    blurURL: "/assets/image-carousel-mobile-02-blur.webp",
    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 320,
      height: 218,
    },
  },
  {
    url: "/assets/image-carousel-mobile-03.webp",
    blurURL: "/assets/image-carousel-mobile-03-blur.webp",

    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 320,
      height: 218,
    },
  },
  {
    url: "/assets/image-carousel-mobile-04.webp",
    blurURL: "/assets/image-carousel-mobile-04-blur.webp",
    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 320,
      height: 218,
    },
  },
];
