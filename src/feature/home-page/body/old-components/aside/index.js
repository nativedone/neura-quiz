import { styled } from "@theme";

import { HospitalVideo } from "./hospital-video";
import { Subscribe } from "./subscribe";

export function Aside() {
  return (
    <AsideContainer>
      <HospitalVideo />

      <Subscribe />
    </AsideContainer>
  );
}

const AsideContainer = styled("div", {
  backgroundColor: "var(--color-primary-body-background)",
  gridArea: "body-aside",

  paddingTop: "$3x_8",
  paddingBottom: "$3x_8",
  paddingLeft: "0",

  "@media screen and (min-width: 1023px)": {
    paddingTop: "0",
    paddingBottom: "$x_2",
    paddingLeft: "$x",
  },
});
