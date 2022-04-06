import { styled } from "@theme";

const SIZES = [35, 50, 67, 75, 85];

export const DevGuidelines = () => {
  return SIZES.map((size) => <Lines size={size} key={size} />);
};

const Lines = ({ size }) => {
  return (
    <>
      {/* left from center line */}
      <Line style={{ left: `${50 - size / 2}%` }} />

      {/* right from center line */}
      <Line style={{ left: `${50 + size / 2}%` }} />
    </>
  );
};

const Line = styled("div", {
  height: "100%",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  borderLeftColor: "orange",
  position: "absolute",
});
