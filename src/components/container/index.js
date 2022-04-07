import { styled } from "@theme";

export const Container = styled("div", {
  margin: "0 auto",

  variants: {
    size: {
      35: {
        width: "35vw",
        backgroundColor: "pink",
      },
      50: {
        width: "50vw",
        backgroundColor: "red",
      },
      67: {
        width: "67vw",
        backgroundColor: "blue",
      },
      75: {
        width: "75vw",
        backgroundColor: "yellow",
      },
      85: {
        width: "85vw",
        backgroundColor: "orange",
      },
    },
  },
});


// Use this for testing only
export const DemoAllContainers = () => {
  const child = <div style={{ width: 100, height: 100 }} />;

  return (
    <>
      <Container size={35}>{child}</Container>
      <Container size={50}>{child}</Container>
      <Container size={67}>{child}</Container>
      <Container size={75}>{child}</Container>
      <Container size={85}>{child}</Container>

      {child}

      <Container size={85}>
        <Container size={75}>
          <Container size={67}>
            <Container size={50}>
              <Container size={35}>{child}</Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};
