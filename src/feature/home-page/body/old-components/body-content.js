import dynamic from "next/dynamic";
import { styled } from "@theme";

const Share = dynamic(() =>
  import("@components/share").then((mod) => mod.Share)
);

export function BodyContent() {
  return (
    <BodyContentContainer>
      <h2>
        An ambulance pulls up in front of our hospital in Kenema, Sierra Leone.
        A mother gets out. She is holding a bundle in her arms with one leg
        hanging down limply. The situation is serious.
      </h2>
      <p>
        Seven-month-old Momoh is unconscious, with a high fever. His skin is
        extremely pale—a clear sign of anaemia. We admit him straight into our
        intensive care unit. After a rapid diagnostic test, we know for certain
        that Momoh has malaria. We immediately administer treatment
        intravenously: artesunate for his severe malaria, and ibuprofen to bring
        down his fever.
      </p>
      <p>
        <strong>
          In my home country of Sierra Leone, malaria is the biggest killer of
          children under five.
        </strong>{" "}
        While malaria is treatable, early diagnosis and quick treatment are
        vital to avoid dangerous complications. In severe malaria parasites may
        attack the brain, causing convulsions, coma, breathing problems, kidney
        failure, severe anemia and even death.
      </p>

      <p>
        I talk to Momoh’s mother to reassure her. In these life-threatening
        situations it’s especially important to strengthen the contact between
        mother and child.
      </p>

      <p>
        Hours later, when Momoh is starting to feel better, I carefully hold a
        cup to his lips and he drinks greedily. He has lost a lot of fluids due
        to the fever, but he is slowly on the road to recovery.
      </p>

      <p>
        <strong>
          After a week we can discharge Momoh healthy. This is exactly why I
          became a nurse. I want to help people and save lives.
        </strong>
      </p>

      <p>
        Médecins Sans Frontières treats more than two million malaria patients
        worldwide every year. We are active in more than 70 countries. We depend
        on donations for this essential work. Thank you so much for helping us
        to save lives with your support.
      </p>
      <span>– HANNAH SAMBA, MSF OUTREACH NURSE, SIERRA LEONE</span>

      <Share />
    </BodyContentContainer>
  );
}

const BodyContentContainer = styled("div", {
  gridArea: "body-content",
  paddingBottom: "$3x_8",

  "@5": {
    paddingBottom: "$x_2",
  },

  h2: {
    fontSize: "$1",
    fontWeight: "$semibold",
    lineHeight: "$tight",
    paddingBottom: "0.62em",
  },
  p: {
    fontSize: "$0",
    fontWeight: "$normal",
    lineHeight: "$snug",

    strong: {
      fontWeight: "$bold",
    },

    "+ p": {
      paddingTop: "0.62em",
    },
  },

  span: {
    display: "inline-block",

    fontSize: "$0",
    fontWeight: "$normal",
    color: "var(--color-secondary-body-text)",
    paddingTop: "0.62em",
    paddingBottom: "$3x_8",

    "@5": {
      paddingBottom: "$x_2",
    },
  },
});
