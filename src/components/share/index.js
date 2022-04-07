import { styled } from "@theme";

export function Share() {
  const onClick = () =>
    navigator
      .share(
        {
          title: "READ MOMOH’S STORY",
          text: "An ambulance pulls up in front of our hospital in Kenema, Sierra Leone...",
          url: location.href,
        },
        {
          // change this configurations to hide specific unnecessary icons
          copy: true,
          email: true,
          print: false,
          sms: true,
          messenger: true,
          facebook: true,
          whatsapp: true,
          twitter: true,
          linkedin: true,
          telegram: true,
          skype: false,
          pinterest: true,
          language: "en", // specify the default language
        }
      )
      .then((_) => console.log("Yay, you shared it :)"))
      .catch((error) =>
        console.log("Oh noh! You couldn't share it! :'(\n", error)
      );

  return (
    <ShareContainer>
      <IconContainer onClick={onClick}>
        <ShareIcon />
      </IconContainer>
      <TextContainer onClick={onClick}>Share</TextContainer>
    </ShareContainer>
  );
}

const ShareContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  maxWidth: "10ch",

  color: "white",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      // color: "yellow",
    },
  },
});

const IconContainer = styled("div", {
  /* 0.75rem(12px) @ 20rem(320px) increasing to 1.125rem(18px) @ 160rem(2560px) */
  fontSize:
    "clamp(0.75rem, calc(0.75rem + ((1vw - 0.2rem) * 0.2679)), 1.125rem)",
  /* Safari resize fix */
  minHeight: "0vw",

  marginLeft: "$x_2",
  marginRight: "$x_8",
});

const TextContainer = styled("div", {
  fontSize: "$-1",
  fontWeight: "$normal",
  lineHeight: "100%",
});

const ShareIcon = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 62.55 52.94"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m174.9 115.33-21.67-11.09a1.54 1.54 0 0 0-1.34 0 1.17 1.17 0 0 0-.67 1v5.79c-.61.14-1.21.28-1.81.44a55.68 55.68 0 0 0-9.59 3.43 52.55 52.55 0 0 0-8.49 5 48.89 48.89 0 0 0-7.09 6.22 44.27 44.27 0 0 0-5.47 7.2 40.54 40.54 0 0 0-3.71 7.87 37.5 37.5 0 0 0-1.83 8.19 36.44 36.44 0 0 0 0 7.6c0 .07.13.08.14 0a36.9 36.9 0 0 1 1.72-7.28 37.48 37.48 0 0 1 3.44-7.27 39.46 39.46 0 0 1 4.9-6.38 41.05 41.05 0 0 1 6.1-5.3 44.22 44.22 0 0 1 21.73-7.91v4.62a1.18 1.18 0 0 0 .67 1 1.54 1.54 0 0 0 .67.16 1.56 1.56 0 0 0 .67-.15l21.63-11.07a1.13 1.13 0 0 0 0-2.07"
      // transform="translate(-113.01 -104.09)"
      transform="translate(-113.01 -90.09)"
      style={{
        fill: "currentColor",
      }}
    />
  </svg>
);
