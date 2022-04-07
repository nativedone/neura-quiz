import { styled } from "@theme";

import { SubscribeForm } from "./subscribe-form";
import { ImageAbsoluteFillBackground } from "./image-absolute-fill-background";

export function Subscribe() {
  return (
    <SubscribeContainer>
      <SubscribeForm
        ImageAbsoluteFillBackground={ImageAbsoluteFillBackground}
      />
    </SubscribeContainer>
  );
}

const SubscribeContainer = styled("div", {
  marginTop: "$3x_8",
});
