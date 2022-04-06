import { styled } from "@theme";

import { Logo } from "@components/logo";
import { VisuallyHidden } from "@components/visually-hidden";
import { SocialLinks } from "@components/social-links";
import { NobelPrizeLogo } from "./noble-prize-logo";

export function Footer() {
  return (
    <footer>
      <FooterInnerContainer>
        <StatementContainer>
          <h2>
            INDEPENDENT. NEUTRAL. IMPARTIAL.
            <br />
            FUNDED BY INDIVIDUALS LIKE YOU.
          </h2>
          <p>
            Médecins Sans Frontières / Doctors Without Borders (MSF) is an
            international and independent medical humanitarian organisation
            delivering emergency medical aid to people affected by armed
            conflict, epidemics, natural disasters, and exclusion from
            healthcare. MSF was founded in 1971 in Paris in the belief that all
            people should have access to healthcare regardless of gender, race,
            religion or political affiliation.
          </p>
        </StatementContainer>
      </FooterInnerContainer>

      <FooterLogsContainer>
        <LogosGrid>
          <MsfLogoContainer
            href="https://msf.org.au/"
            target="_blank"
            rel="noreferrer"
          >
            <Logo />
            <VisuallyHidden>MSF logo</VisuallyHidden>
          </MsfLogoContainer>

          <NobelPrizeLogoContainer>
            <NobelPrizeLogo />
            <VisuallyHidden>MSF nobel peace prize 1999</VisuallyHidden>
          </NobelPrizeLogoContainer>

          <SocialsLogosContainer>
            <SocialLinks />
          </SocialsLogosContainer>
        </LogosGrid>
      </FooterLogsContainer>
    </footer>
  );
}

const FooterInnerContainer = styled("div", {
  margin: "0 auto",
  width: "85vw",

  "@3": {
    width: "75vw",
  },
  "@7": {
    width: "50vw",
  },
});

const FooterLogsContainer = styled("div", {
  margin: "0 auto",
  width: "85vw",

  "@3": {
    width: "75vw",
  },
  "@6": {
    width: "67vw",
  },
});

const StatementContainer = styled("div", {
  color: "white",

  textAlign: "center",

  paddingTop: "$x",
  paddingBottom: "$x",

  h2: {
    fontSize: "$1",
    fontWeight: "$semibold",
    lineHeight: "$tight",
    paddingBottom: "0.62em",
  },

  p: {
    margin: "0 auto",
    fontSize: "$0",
    fontWeight: "$normal",
    lineHeight: "$snug",

    "@5": {
      maxWidth: "45vw",
    },
  },
});

const LogosGrid = styled("div", {
  display: "grid",
  paddingBottom: "$x",

  "> div": {
    display: "flex",
  },

  gridTemplateColumns: "1fr 1fr",
  gridTemplateAreas: '"peace-logo msf-logo"\n   "socials-logos socials-logos"',

  "@5": {
    paddingBottom: "$x_2",
  },
  // TODO: maybe join in both media queries
  "@media screen and (min-width: 1023px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateAreas: '"msf-logo peace-logo socials-logos"',
  },
});

const MsfLogoContainer = styled("a", {
  /* 3.25rem(52px) @ 20rem(320px) increasing to 8.8125rem(141px) @ 160rem(2560px) */
  fontSize:
    "clamp(3.25rem, calc(3.25rem + ((1vw - 0.2rem) * 3.9732)), 8.8125rem)",

  gridArea: "msf-logo",
});

const NobelPrizeLogoContainer = styled("div", {
  /* 3.625rem(58px) @ 20rem(320px) increasing to 10.125rem(162px) @ 160rem(2560px) */
  fontSize:
    "clamp(3.625rem, calc(3.625rem + ((1vw - 0.2rem) * 4.6429)), 10.125rem)",

  gridArea: "peace-logo",

  "@5": {
    display: "flex",
    justifyContent: "center",
  },
});

const SocialsLogosContainer = styled("div", {
  gridArea: "socials-logos",

  "@5": {
    display: "flex",
    justifyContent: "flex-end",
  },
});
