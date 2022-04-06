import { styled } from "@theme";
import { VisuallyHidden } from "@components/visually-hidden";

import { Twitter } from "./twitter";
import { Facebook } from "./facebook";
import { LinkedIn } from "./linked-in";
import { Youtube } from "./youtube";

export function SocialLinks() {
  return (
    <Container>
      <Row>
        <span>Follow us</span>
        <UnorderedList>
          <li>
            <a
              href="https://www.facebook.com/MSFANZ"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
              <VisuallyHidden>Visit our facebook page</VisuallyHidden>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/MSFAustralia"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
              <VisuallyHidden>Visit our twitter page</VisuallyHidden>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/company/m-decins-sans-fronti-res-australia"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
              <VisuallyHidden>Visit our linkedin page</VisuallyHidden>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/MSFAustralia"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
              <VisuallyHidden>Visit our youtube page</VisuallyHidden>
            </a>
          </li>
        </UnorderedList>
      </Row>

      <ToneLink
        href="https://tonesudio.com.au"
        target="_blank"
        rel="noreferrer"
      >
        Page designed and developed by Tone Studio Pty Ltd.
      </ToneLink>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  "@5": {
    width: "unset",
  },
});

const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  color: "white",
  fontSize: "$1",

  span: {
    whiteSpace: "nowrap",
    fontWeight: "$bold",
  },

  /* 5.875rem(94px) @ 20rem(320px) increasing to 8.5rem(136px) @ 160rem(2560px) */
  "--desktop-padding-top":
    "clamp(5.875rem, calc(5.875rem + ((1vw - 0.2rem) * 1.875)), 8.5rem)",

  marginTop: "$x",

  "@5": {
    marginTop: "calc(0.5 * var(--desktop-padding-top))",
  },
});

const UnorderedList = styled("ul", {
  display: "flex",
  alignItems: "center",

  li: {
    /* 2.25rem(36px) @ 20rem(320px) increasing to 3.375rem(54px) @ 160rem(2560px) */
    fontSize:
      "clamp(2.25rem, calc(2.25rem + ((1vw - 0.2rem) * 0.8036)), 3.375rem)",

    // remove extra space below
    lineHeight: 0.5,

    /* 1.0625rem(17px) @ 20rem(320px) increasing to 1.625rem(26px) @ 160rem(2560px) */
    marginLeft:
      "clamp(1.0625rem, calc(1.0625rem + ((1vw - 0.2rem) * 0.4018)), 1.625rem)",

    overflow: "hidden",

    /* Safari resize fix */
    // minHeight: "0vw",

    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        // color: "var(--color-8b8d94)",
      },
    },
  },
});

const ToneLink = styled("a", {
  fontSize: "$0",
  color: "#BAB9AF",
  display: "inline-block",
  paddingTop: "$x_2",
  textAlign: "center",

  "@5": {
    textAlign: "left",
  },
});
