import dynamic from "next/dynamic";

import { styled } from "@theme";

const Body = dynamic(() => import("./body").then((mod) => mod.Body));

export function Homepage() {
  return (
    <PageContainer>
      <Body />
    </PageContainer>
  );
}

const PageContainer = styled("div", {
  overflow: "hidden",
});
