import { useState, useCallback, useEffect } from "react";

import { styled } from "@theme";
import { Button } from "@components/button";
import { Logo } from "@components/logo";

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
    return (
      <Container key="result">
        <Box className="has-radius">
          <span className="heading">
            {`You got ${score} out of ${data.length} correct!`}
          </span>

          <p className="paragraph">Thank you for taking the quiz.</p>
          <p className="paragraph">
            There is so much to learn about the brain!
          </p>
          <p className="paragraph">
            <strong>“We know more about space, than we do the brain.”</strong>
            <br />– Dr Steve Kassam
          </p>
          <p className="paragraph">
            Click{" "}
            <a className="external-link" href="#">
              here
            </a>{" "}
            to come on a discovery journey into the brain with NeuRA.
          </p>
        </Box>
        <Navigation>
          <Logo />
          <Button variant="secondary" onClick={() => {}}>
            DISCOVER MORE
          </Button>
        </Navigation>
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
      <Box className="has-radius">
        <span className="heading">
          {data[currentQuestion].explanation.title}
        </span>
        {data[currentQuestion].explanation.paragraphs.map((text) => (
          <p key={text} className="paragraph">
            {text}
          </p>
        ))}
      </Box>
      <Navigation>
        <Pagination>
          {data.map((_, index) => (
            <span
              key={`pagination__${index}`}
              className={index <= currentQuestion ? "is-answered" : ""}
            />
          ))}
          {/* extra */}
          <span />
        </Pagination>
        <Button variant="secondary" onClick={handleNextClicked}>
          NEXT
        </Button>
      </Navigation>
    </Container>
  );
}

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "$x_2",

  margin: "auto", // TODO: fix for mobile

  zIndex: "$50",
  width: "85vw",

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
  },
});

export function Container({ children }) {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    setScale(1);
  }, []);

  return (
    <BaseContainer style={{ transform: `scale(${scale})` }}>
      {children}
    </BaseContainer>
  );
}

const BaseContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  // backgroundColor: "red",

  zIndex: "$50",

  width: "85vw",

  "@3": {
    width: "50vw",
  },

  transition: "transform 500ms ease-in",
});

const Navigation = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  paddingTop: "$x",

  width: "100%",

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
