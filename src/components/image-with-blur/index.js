import Image from "next/image";

// Some hosting services (eg. Vercel) don't provide the url protocol. So, we normalize the url by removing https://
const PAGE_URL = (process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_CLOUDFLARE_PAGES_URL)?.replace("https://", "");

// Reference:
// https://opstrace.com/blog/nextjs-on-cloudflare#images
const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75;
  }
  return `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}?width=${width}&quality=${quality}&image=https://${PAGE_URL}${src}`;
};

export function ImageWithBlur(props) {
  const layout = props.layout || "fill";
  const dimensions = layout !== "fill" ? props.aspect_ratio : {};

  const { blurURL, ...recognizedDOMPros } = props;

  if (process.env.NODE_ENV === "development") {
    return (
      <Image
        {...recognizedDOMPros}
        src={props.src}
        alt={props.alt}
        layout={layout}
        objectFit={props.objectFit || "cover"}
        placeholder="blur"
        blurDataURL={blurURL}
        {...dimensions}
        unoptimized={true}
      />
    );
  }

  return (
    <Image
      {...recognizedDOMPros}
      src={props.src}
      alt={props.alt}
      layout={layout}
      objectFit={props.objectFit || "cover"}
      placeholder="blur"
      blurDataURL={blurURL}
      {...dimensions}
      loader={cloudflareImageLoader}
    />
  );
}
