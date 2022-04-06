import { useCallback, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { styled } from "@theme";

import { CarouselItem } from "../carousel-item";
import { CarouselDesktopNavigation } from "./carousel-desktop-navigation";

import "swiper/css";

export function CarouselDesktop() {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <CarouselDesktopContainer>
      <CarouselDesktopInnerContainer>
        <Swiper
          ref={swiperRef}
          loop={false}
          breakpoints={{
            639: {
              spaceBetween: 43.9 / 5, // design value is x/5 so we calculate x for 640 viewport and divide by 5
              slidesPerView: 2.235,
            },
            767: {
              spaceBetween: 47.6 / 5, // see above note
              slidesPerView: 2.235,
            },
            1023: {
              spaceBetween: 55.2 / 5, // see above note
              slidesPerView: 2.235,
            },
            1103: {
              spaceBetween: 57.5 / 5, // see above note
              slidesPerView: 2.235,
            },
            1278: {
              spaceBetween: 62.7 / 5, // see above note
              slidesPerView: 2.235,
            },
            1365: {
              spaceBetween: 65.3 / 5, // see above note
              slidesPerView: 2.235,
            },
            1439: {
              spaceBetween: 66.9997 / 5, // see above note
              slidesPerView: 2.235,
            },
            1919: {
              spaceBetween: 81.2 / 5, // see above note
              slidesPerView: 2.29,
            },
            2559: {
              spaceBetween: 100 / 5, // see above note
              slidesPerView: 2.29,
            },
          }}
          autoplay={false}
          speed={700}
          onSlideChange={(a) => {
            // console.log("slide change", a);
            // console.log("slide change realIndex", a.realIndex);
            // setIndex(a.realIndex);
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={`slide key ${index}`}>
              <CarouselItem {...item} priority={index === 0} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselDesktopInnerContainer>
      <CarouselDesktopNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
    </CarouselDesktopContainer>
  );
}

const CarouselDesktopContainer = styled("div", {
  display: "flex",
  // width: "67vw",
  justifyContent: "center",
  position: "relative",
  margin: "0 auto",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      "button.prev-carousel-desktop-navigation": {
        opacity: 1,
      },
      "button.next-carousel-desktop-navigation": {
        opacity: 1,
      },
    },
  },
});

const CarouselDesktopInnerContainer = styled("div", {
  width: "100%",
  position: "relative",
});

const data = [
  {
    url: "/assets/image-carousel-desktop-01.webp",
    blurURL: "/assets/image-carousel-desktop-01-blur.webp",
    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 790,
      height: 540,
    },
  },

  {
    url: "/assets/image-carousel-desktop-02.webp",
    blurURL: "/assets/image-carousel-desktop-02-blur.webp",
    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 790,
      height: 540,
    },
  },
  {
    url: "/assets/image-carousel-desktop-03.webp",
    blurURL: "/assets/image-carousel-desktop-03-blur.webp",
    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 790,
      height: 540,
    },
  },
  {
    url: "/assets/image-carousel-desktop-04.webp",
    blurURL: "/assets/image-carousel-desktop-04-blur.webp",
    alt: "Momoh in the hospital",
    aspect_ratio: {
      width: 790,
      height: 540,
    },
  },
];
