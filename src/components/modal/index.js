import { useState } from "react";

import { styled } from "@theme";
import { ClientOnlyPortal } from "@components/client-only-portal";

export function Modal({ children, OpenOnClickElement }) {
  const [open, setOpen] = useState();

  return (
    <>
      <div onClick={() => setOpen(true)}>
        <OpenOnClickElement />
      </div>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div className="backdrop">
            <div className="modal">
              <div>
                {children}
                <CloseButton type="button" onClick={() => setOpen(false)}>
                  <CloseIcon />
                </CloseButton>
              </div>
            </div>
            <style jsx>{`
              :global(body) {
                overflow: hidden;
              }
              .backdrop {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 9999999999999999999999;
              }
              .modal {
                background-color: transparent;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            `}</style>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
}

const CloseButton = styled("button", {
  "--mobile-video-width": "90vw",
  "--desktop-video-width": "60vw",

  position: "absolute",
  top: "calc(0.04* var(--mobile-video-width))",
  right: "calc(0.02* var(--mobile-video-width))",
  fontSize: "calc(0.06* var(--mobile-video-width))",

  "@5": {
    top: "calc(0.015* var(--desktop-video-width))",
    right: "calc(0.007* var(--desktop-video-width))",
    fontSize: "calc(0.025* var(--desktop-video-width))",
  },
});

const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"
      fill="rgba(255,255,255,1)"
    />
  </svg>
);
