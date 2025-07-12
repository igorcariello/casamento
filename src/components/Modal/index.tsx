import { Container, Overlay, MessageText, CloseButton } from "./styles";

interface ModalProps {
  message: string;
  onClose: () => void;
}

export function Modal({ message, onClose }: ModalProps) {
  return (
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Modal"
    >
      <Container onClick={(e) => e.stopPropagation()}>
        <MessageText>{message}</MessageText>
        <CloseButton onClick={onClose} aria-label="Fechar modal">
          OK
        </CloseButton>
      </Container>
    </Overlay>
  );
}
