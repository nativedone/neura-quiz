import { styled } from "@theme";

export function TestimonyQuote() {
  return (
    <Container>
      <ParagraphsList>
        <p className="primary">
          “This is exactly why I became a nurse. I want to help people and save
          lives.
        </p>

        <p>
          Médecins Sans Frontières treat more than two million malaria patients
          worldwide every year. We are active in more than 70 countries.
        </p>

        <p>
          We depend on donations for this work. Thank you for helping us to save
          lives with your continuous donations.”
        </p>
      </ParagraphsList>
      <ActionButton href="https://msf.org.au/donate-now" target="_blank">
        PLEASE DONATE TODAY
      </ActionButton>
    </Container>
  );
}

const Container = styled("div", {
  gridArea: "testimony-quote",
  width: "100%",

  display: "grid",
  gridTemplateRows: "1fr auto",

  backgroundColor: "white",
  paddingLeft: "8.5vw",
  paddingRight: "8.5vw",

  "@5": {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
});

const ParagraphsList = styled("div", {
  backgroundColor: "white",
  color: "var(--color-secondary-body-text)",

  paddingTop: "$3x_8",
  paddingBottom: "$3x_8",

  display: "flex",
  flexDirection: "column",

  "@5": {
    paddingTop: "$x_4",
    paddingBottom: "$x_4",
    paddingLeft: "$3x_4",
    paddingRight: "$3x_4",
    justifyContent: "center",
  },

  p: {
    fontSize: "$1",
    fontWeight: "$normal",
    lineHeight: "$tight",

    "&.primary": {
      fontSize: "$2",
      fontWeight: "$bold",
      lineHeight: "$tight",
    },

    "+ p": {
      marginTop: "0.62em",
    },
  },
});

const ActionButton = styled("a", {
  minHeight: "var(--button-minimum-height)",

  paddingLeft: "var(--button-horizontal-padding)",
  paddingRight: "var(--button-horizontal-padding)",
  paddingTop: "var(--button-vertical-padding)",
  paddingBottom: "var(--button-vertical-padding)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "$0",
  fontWeight: "$bold",
  lineHeight: "$same",
  backgroundColor: "var(--color-primary-button-background)",
  color: "white",
  textAlign: "center",

  letterSpacing: "0.78px",

  marginBottom: "$3x_8",
  "@2": {
    fontSize: "$2",
  },
  "@5": {
    fontSize: "$3",
    marginBottom: "0px",
  },

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "var(--color-primary-button-background-hover)",
    },
  },
});
