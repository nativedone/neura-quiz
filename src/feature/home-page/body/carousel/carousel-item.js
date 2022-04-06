import { styled } from "@theme";
import { ImageWithBlur } from "@components/image-with-blur";

export function CarouselItem({ url, alt, aspect_ratio, priority, blurURL }) {
  return (
    <CarouselItemContainer>
      <ImageWithBlur
        src={url}
        alt={alt}
        layout="responsive"
        objectFit="cover"
        aspect_ratio={aspect_ratio}
        priority={priority}
        blurURL={blurURL}
      />
    </CarouselItemContainer>
  );
}

const CarouselItemContainer = styled("div", {
  position: "relative",
});
