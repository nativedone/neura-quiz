import { useState, useCallback, useEffect } from "react";

import { styled } from "@theme";
import { Button } from "@components/button";
import { Logo } from "@components/logo";
import { ScrollAreaContainer } from "@components/scroll-area-container";

import { data } from "./data";

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswerStatus, setCurrentAnswerStatus] = useState("idle"); // correct or wrong
  const [score, setScore] = useState(0);

  const handleOptionClicked = useCallback(
    (index) => {
      const isCorrect = data[currentQuestion].options[index].isCorrect;

      setScore((prev) => (isCorrect ? prev + 1 : prev));
      setCurrentAnswerStatus(isCorrect ? "correct" : "wrong");
    },
    [currentQuestion]
  );

  const handleNextClicked = useCallback(() => {
    setCurrentQuestion(currentQuestion + 1);
    setCurrentAnswerStatus("idle");
  }, [currentQuestion]);

  if (currentQuestion === data.length) {
    const lowScoreResultMessage = `We hope you enjoyed learning something new about the brain! If you did, there is still so much more to discover.`;
    const highScoreResultMessage = `Well done! You clearly take an interest in the brain, which is great because there is still so much more to discover!`;

    const messageBasedOnScore =
      score <= data.length / 2 ? lowScoreResultMessage : highScoreResultMessage;

    return (
      <Container key="result">
        <InnerContainer>
          <ScrollAreaContainer>
            <Box className="has-radius">
              <span className="heading">
                {`You got ${score} out of ${data.length} correct!`}
              </span>

              <p className="paragraph">{messageBasedOnScore}</p>

              <p className="paragraph">
                In fact, did you know that{" "}
                <strong>
                  we know more about space than we do about the human brain?
                </strong>
              </p>
              <p className="paragraph">
                Click{" "}
                <a className="external-link" href="#">
                  here
                </a>{" "}
                to come on a discovery journey into the brain with NeuRA.
              </p>
            </Box>
          </ScrollAreaContainer>
          <Navigation>
            <Logo />
            <Button variant="secondary" onClick={() => {}}>
              DISCOVER MORE
            </Button>
          </Navigation>
        </InnerContainer>
      </Container>
    );
  }

  if (currentAnswerStatus === "idle") {
    return (
      <Container key="question">
        <Box className="has-border">
          <p className="question">{data[currentQuestion].question}</p>
          {data[currentQuestion].options.map((option, index) => (
            <Button
              key={`${currentQuestion}__${option.label}`}
              variant="secondary"
              onClick={() => handleOptionClicked(index)}
            >
              {option.label}
            </Button>
          ))}
        </Box>
      </Container>
    );
  }

  return (
    <Container key="partial-result">
      <InnerContainer>
        <ScrollAreaContainer>
          <Box className="has-radius">
            <div>
              <span className="heading">
                {data[currentQuestion].explanation.title}
              </span>
              {data[currentQuestion].explanation.paragraphs.map((text) => (
                <p key={text} className="paragraph">
                  {text}
                </p>
              ))}
            </div>
          </Box>
        </ScrollAreaContainer>

        <Navigation>
          <Pagination>
            {data.map((_, index) => (
              <span
                key={`pagination__${index}`}
                className={index <= currentQuestion ? "is-answered" : ""}
              />
            ))}
          </Pagination>
          <Button variant="secondary" onClick={handleNextClicked}>
            {currentQuestion === data.length - 1 ? "SEE RESULTS" : "NEXT"}
          </Button>
        </Navigation>
      </InnerContainer>
    </Container>
  );
}

const InnerContainer = styled("div", {
  position: "relative",

  // backgroundColor: "red",
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "$x",

  margin: "auto", // TODO: fix for mobile

  zIndex: "$50",
  width: "85vw",
  // maxHeight: "50vh",
  // overflow: "auto",

  "&.has-border": {
    outline: "2px solid white",
  },

  "&.has-radius": {
    borderRadius: "$2xl",
  },

  "p.question": {
    fontSize: "$0",
    fontWeight: "$normal",
    lineHeight: "$tight",
    color: "white",
    paddingBottom: "$x_2",
  },
  "span.heading": {
    fontSize: "$2",
    fontWeight: "$normal",
    lineHeight: "$tight",
    color: "white",
    paddingBottom: "0.5em",

    letterSpacing: "0.34px",
  },
  "p.paragraph": {
    fontSize: "$-1",
    fontWeight: "$normal",
    lineHeight: "$tight",
    color: "white",

    "+ p.paragraph": {
      paddingTop: "0.5em",
    },
  },

  "a.external-link": {
    textDecoration: "underline",
  },

  "@3": {
    width: "35vw",
    padding: "$x_2",
  },
});

export function Container({ children }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return <BaseContainer style={{ opacity }}>{children}</BaseContainer>;
}

const BaseContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  // backgroundColor: "green",

  zIndex: "$50",

  width: "85vw",
  paddingBottom: "calc(5.5 * var(--x))",

  "@3": {
    width: "50vw",
    paddingBottom: "0px",
  },

  transition: "opacity 1000ms",
});

const Navigation = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  position: "absolute",
  bottom: "calc(-2.5 * var(--x))",
  left: 0,
  width: "85vw",

  "@3": {
    bottom: "calc(-1 * var(--x))",
    width: "50vw",
  },

  /* 2rem(32px) @ 20rem(320px) increasing to 3.4375rem(55px) @ 160rem(2560px) */
  fontSize: "clamp(2rem, calc(2rem + ((1vw - 0.2rem) * 1.0268)), 3.4375rem)",

  /* Safari resize fix */
  minHeight: "0vw",
});

const Pagination = styled("div", {
  display: "flex",
  alignItems: "center",

  span: {
    border: "2px solid white",
    width: "$x_2",
    height: "$x_2",

    borderRadius: "$full",

    "&.is-answered": {
      backgroundColor: "white",
    },
    "+ span": {
      marginLeft: "$x_4",
    },

    "@3": {
      width: "$x_4",
      height: "$x_4",
      "+ span": {
        marginLeft: "$x_8",
      },
    },

    cursor: "not-allowed",
  },
});
