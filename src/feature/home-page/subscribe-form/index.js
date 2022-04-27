import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { styled } from "@theme";
import { emailPattern } from "@utils/validations/email";
import { Button } from "@components/button";
import { ScrollAreaContainer } from "@components/scroll-area-container";

export function SubscribeForm({ onSuccess }) {
  const [status, setStatus] = useState("idle");
  const [hasMounted, setMountedStatus] = useState(0);

  useEffect(() => {
    setMountedStatus(1);
  }, []);

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

    const { email, firstName, lastName, mobile, postCode } = values;
    const searchParams = new URLSearchParams(location.search);

    setStatus("loading");

    setStatus("success");
    onSuccess();

    return;

    fetch(process.env.NEXT_PUBLIC_SUBSCRIBE_URL, {
      method: "POST",
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        postCode,
        mobile,

        // utm_sources from facebook
        adsetid: searchParams.get("adsetid") || "",
        adid: searchParams.get("adid") || "",
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
        onSuccess();
      })
      .catch((error) => {
        setStatus("error");
        console.log("catch ERROR", JSON.stringify(error, null, 2));
      });
  };

  let information = (
    <p className="description">
      By signing, you may receive communications about how you can help NeuRA
      find cures for diseases and disability of the brain and nervous system, on
      the understanding you agree to our{" "}
      <a
        href="https://www.neura.edu.au/privacy/"
        target="_blank"
        rel="noreferrer"
        style={{ fontStyle: "italic" }}
      >
        Privacy policy
      </a>
      <a
        href="https://www.neura.edu.au/disclaimer/"
        target="_blank"
        rel="noreferrer"
        style={{ fontStyle: "italic" }}
      >
        {" "}
        / Terms and conditions
      </a>
      .
    </p>
  );

  if (status === "error") {
    information = <ApiError />;
  }

  const hasValidationErrors = Object.values(errors).length > 0;
  const validationErrorsClassName = hasValidationErrors
    ? "has-validation-errors"
    : "";
  const onMountClassName = hasMounted ? "has-mounted" : "";

  return (
    <SubscribeContainer
      className={`${validationErrorsClassName} ${onMountClassName}`}
    >
      <ScrollAreaContainer size="medium">
        <InnerContainer>
          <FormContainer>
            <span className="heading">
              Fill in your details to start the quiz!
            </span>
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
                label="lastName"
                register={register}
                validation={{
                  required: "Please provide a valid last name",
                }}
                error={errors?.lastName?.message}
                placeholder="Last Name"
              />

              <Field
                label="mobile" // TODO: change to phone_number
                register={register}
                validation={{
                  required: "Please provide a valid mobile number",
                  // pattern: {
                  //   value: mobilePattern,
                  //   message: "Please provide a valid mobile number",
                  // },
                }}
                error={errors?.mobile?.message}
                placeholder="Phone number"
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
              <Field
                label="postCode"
                register={register}
                validation={{
                  required: "Please provide a valid Postcode",
                  // pattern: {
                  //   value: postCodePattern,
                  //   message: "Please provide a valid Postcode",
                  // },
                }}
                error={errors?.postCode?.message}
                placeholder="Postcode"
              />
            </Form>

            {information}
          </FormContainer>
          <Button variant="secondary" onClick={handleSubmit(onSubmit)}>
            {status === "loading" ? "PLEASE WAIT..." : "START QUIZ"}
          </Button>
        </InnerContainer>
      </ScrollAreaContainer>
    </SubscribeContainer>
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
      {error && <FieldErrorMessage role="alert">{error}</FieldErrorMessage>}
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

const InnerContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "$x",

  "@3": {
    padding: "$x_2",
  },
});

const SubscribeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "$2xl",
  zIndex: "$50",
  width: "85vw",
  marginBottom: "$3x_2",

  "@3": {
    width: "35vw",
    margin: "auto",
  },

  "&.has-validation-errors": {
    backgroundColor: "rgb(0, 0, 0)",
  },

  transform: "translate3d(0, 100vh, 0)",
  willChange: "transform",
  transition: "transform 800ms ease-in",

  "&.has-mounted": {
    transform: "translate3d(0, 0, 0)",
  },
});

const FormContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "span.heading": {
    fontSize: "$0",
    fontWeight: "$normal",
    lineHeight: "$tight",
    color: "white",
    paddingBottom: "0.5em",

    letterSpacing: "0.34px",
  },
  "p.description": {
    fontSize: "$-6",
    fontWeight: "$normal",
    lineHeight: "$tight",
    color: "white",
    paddingTop: "0.5em",
    paddingBottom: "$x_2",
  },
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  position: "relative",

  paddingBottom: "$x_8",

  "> .field": {
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "$md",
    fontWeight: "$normal",
    color: "white",
    width: "100%",

    fontSize: "max(16px, var(--step-0))",
    lineHeight: "100%",

    paddingLeft: "$x_4",
    paddingRight: "$x_4",
    paddingTop: "$x_8",
    paddingBottom: "$x_8",

    /* Safari resize fix */
    minHeight: "0vw",

    "+ input.field": {
      /* 0.875rem(14px) @ 20rem(320px) increasing to 1.25rem(20px) @ 160rem(2560px) */
      marginTop:
        "clamp(0.875rem, calc(0.875rem + ((1vw - 0.2rem) * 0.2679)), 1.25rem)",
    },

    "&::placeholder": {
      color: "rgba(255,255,255, 0.75)",
      fontSize: "max(16px, var(--step-0))",
    },
  },

  "&:focus-within": {
    "> *": {
      outline: "none",
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
