import { Button } from "@components/button";
import { keyframes, styled } from "@theme";

const beat = keyframes({
  to: { transform: "scale(1.4)" },
});

const ripple = keyframes({
  to: { transform: "translate3d(-50%, -50%, 0) scale(1)", opacity: 0.2 },
});

const Heart = styled("div", {
  animation: `${beat} .5s infinite alternate`,
  marginRight: "1ch",
  marginBottom: "-5%",

  position: "relative",
});

const Flex = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Ripple = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "400px",
  height: "400px",
  borderRadius: "9999px",
  transform: "translate3d(-50%, -50%, 0) scale(0)",

  backgroundColor: "rgba(255,255,255,0.2)",

  zIndex: 1,

  animation: `${ripple} 2s infinite`,
});

const DonateButtonWrapper = styled("div", {
  marginTop: "$x",

  "@3": {
    marginTop: "$x_2",
  },

  display: "flex",
  justifyContent: "center",
});

export const DonateButton = () => (
  <DonateButtonWrapper>
    <Button variant="accent" as="a" href="?form=discovery">
      <Flex>
        <Heart>
          <svg width="1em" height="1em" viewBox="0 0 16 16">
            <path
              fill="#FFFFFF"
              d="M8 14.3611C20.957 7.21501 12.8701 -0.965478 8 4.04274C3.12995 -0.965534 -4.957 7.21495 8 14.3611Z"
            ></path>
          </svg>
          <Ripple />
        </Heart>
        DONATE
      </Flex>
    </Button>
  </DonateButtonWrapper>
);
