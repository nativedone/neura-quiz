import { useState } from "react";
import { useForm } from "react-hook-form";

import { styled } from "@theme";
import { emailPattern } from "@utils/validations/email";

export function SubscribeForm({ ImageAbsoluteFillBackground }) {
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "firstError",
  });

  const onSubmit = (values) => {
    if (status === "loading") {
      return;
    }

    const { email, firstName } = values;

    setStatus("loading");

    fetch(process.env.NEXT_PUBLIC_SUBSCRIBE_URL, {
      method: "POST",
      body: JSON.stringify({
        email,
        firstName,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        const { data, error } = result;
        if (error) {
          setStatus("error");
          console.log("result error", JSON.stringify(error, null, 2));

          return;
        }

        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        console.log("catch ERROR", JSON.stringify(error, null, 2));
      });
  };

  let information = (
    <>
      <span className="heading">Subscribe to our newsletter</span>

      <p className="description">
        Each month we produce an e-newsletter with articles and updates on our
        work in the field. It’s a great way to keep in touch with our activities
        throughout the world.
      </p>
    </>
  );

  if (status === "error") {
    information = <ApiError />;
  }

  if (status === "success") {
    information = <ApiSuccess />;
  }

  return (
    <>
      <ImageAbsoluteFillBackground>
        <FormContainer>
          {information}
          <Form aria-label="Subscribe form">
            <Field
              label="firstName"
              register={register}
              validation={{
                required: "Please provide a valid first name",
              }}
              error={errors?.firstName?.message}
              placeholder="First Name"
            />

            <Field
              label="email"
              register={register}
              validation={{
                required: "Please provide a valid email",
                pattern: {
                  value: emailPattern,
                  message: "Please provide a valid email",
                },
              }}
              error={errors?.email?.message}
              placeholder="Email"
            />
          </Form>
        </FormContainer>
      </ImageAbsoluteFillBackground>
      <SubmitButton onClick={handleSubmit(onSubmit)}>
        {status === "loading" ? "PLEASE WAIT..." : "SUBSCRIBE"}
      </SubmitButton>
    </>
  );
}

function Field(props) {
  const { label, register, validation, error, variant, ...otherProps } = props;

  const FieldComponent = variant || "input";

  return (
    <>
      <FieldComponent
        {...register(label, validation)}
        className={`field ${variant || "input"}`}
        aria-invalid={error ? "true" : "false"}
        {...otherProps}
      />
      {error && (
        <FieldErrorMessage role="alert" s>
          {error}
        </FieldErrorMessage>
      )}
    </>
  );
}

function ApiError(props) {
  const errorMessage =
    props.message || "Something went wrong. Please try again later";

  return (
    <>
      {errorMessage && (
        <ApiErrorMessage role="alert">{errorMessage}</ApiErrorMessage>
      )}
    </>
  );
}

function ApiSuccess() {
  return <ApiSuccessMessage role="alert">THANK YOU!</ApiSuccessMessage>;
}

const FormContainer = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  top: "0px",
  bottom: "0px",
  left: "0px",
  right: "0px",

  /* 0.9375rem(15px) @ 20rem(320px) increasing to 1.4375rem(23px) @ 160rem(2560px) */
  padding:
    "0 clamp(0.9375rem, calc(0.9375rem + ((1vw - 0.2rem) * 0.3571)), 1.4375rem)",

  "span.heading": {
    fontSize: "$1",
    fontWeight: "$semibold",
    lineHeight: "$tight",
    color: "white",
    paddingBottom: "0.5em",

    letterSpacing: "0.34px",
  },
  "p.description": {
    fontSize: "$-1",
    fontWeight: "$normal",
    lineHeight: "$tight",
    color: "white",
    paddingBottom: "1em",
  },
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  position: "relative",

  paddingBottom: "15px",

  "> .field": {
    border: "none",
    backgroundColor: "white",
    borderRadius: "$none",
    fontWeight: "$normal",
    color: "var(--color-191b2a)",
    width: "100%",

    fontSize: "max(16px, var(--step--1))",
    lineHeight: "100%",

    /* 0.875rem(14px) @ 20rem(320px) increasing to 1.125rem(18px) @ 160rem(2560px) */
    "--padding-horizontal-size": `clamp(
        0.875rem,
        calc(0.875rem + ((1vw - 0.2rem) * 0.1786)),
        1.125rem
      )`,

    paddingLeft: "var(--padding-horizontal-size)",
    paddingRight: "var(--padding-horizontal-size)",

    /* 0.595rem(9.52px) @ 20rem(320px) increasing to 0.75rem(12px) @ 160rem(2560px) */
    "--padding-vertical-size": `clamp(
        0.595rem,
        calc(0.595rem + ((1vw - 0.2rem) * 0.1107)),
        0.75rem
      )`,

    paddingTop: "var(--padding-vertical-size)",
    paddingBottom: "var(--padding-vertical-size)",

    /* Safari resize fix */
    minHeight: "0vw",

    "+ input.field": {
      /* 0.875rem(14px) @ 20rem(320px) increasing to 1.25rem(20px) @ 160rem(2560px) */
      marginTop:
        "clamp(0.875rem, calc(0.875rem + ((1vw - 0.2rem) * 0.2679)), 1.25rem)",
    },

    "&::placeholder": {
      color: "#636363",
      fontSize: "var(--step--1)",
    },
  },

  "&:focus-within": {
    "> *": {
      outline: "none",
      boxShadow: "0px 0px 1px 1px var(--color-fbc01c)", //TODO: fix this color
    },
  },
});

const SubmitButton = styled("div", {
  minHeight: "var(--button-minimum-height)",

  /* 0.121875rem(1.95px) @ 20rem(320px) increasing to 0.18125rem(2.9px) @ 160rem(2560px) */
  marginTop:
    "clamp(0.121875rem, calc(0.121875rem + ((1vw - 0.2rem) * 0.0424)), 0.18125rem)",

  paddingLeft: "var(--button-horizontal-padding)",
  paddingRight: "var(--button-horizontal-padding)",
  paddingTop: "var(--button-vertical-padding)",
  paddingBottom: "var(--button-vertical-padding)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "$0",
  fontWeight: "$bold",
  lineHeight: "$none",
  backgroundColor: "var(--color-secondary-button-background)",
  color: "white",
  textAlign: "center",

  letterSpacing: "0.78px",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "var(--color-secondary-button-background-hover)",
    },
  },
});

const FieldErrorMessage = styled("span", {
  bottom: "0.7rem",
  color: "#bd3f53",
  fontSize: "0.8rem",
  fontWeight: "$light",
  letterSpacing: "0.01em",
  outline: "none !important",
  boxShadow: "none !important",
});

const ApiErrorMessage = styled("span", {
  color: "white",
  marginBottom: "1rem",
  fontSize: "1rem",
  fontWeight: "$light",
  letterSpacing: "0.01em",
  textAlign: "center",
  backgroundColor: "#bd3f53",
  padding: "10px",
  borderRadius: "$full",

  display: "inline-block",
});

const ApiSuccessMessage = styled("span", {
  color: "white",
  fontSize: "$2",
  fontWeight: "$bold",
  letterSpacing: "0.01em",
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});
