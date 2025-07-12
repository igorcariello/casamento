import { Overlay } from "@radix-ui/react-dialog";
import React, { useEffect, useRef } from "react";
import { CloseButton, Message, ModalContainer } from "./styles";

interface ModalProps {
  message: string;
  onClose: () => void;
}

export function Modal({ message, onClose }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function handleModalClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <Overlay onClick={onClose} role="dialog" aria-modal="true">
      <ModalContainer onClick={handleModalClick}>
        <Message>{message}</Message>
        <CloseButton
          onClick={onClose}
          ref={closeBtnRef}
          aria-label="Fechar modal"
        >
          Fechar
        </CloseButton>
      </ModalContainer>
    </Overlay>
  );
}
