import { Button, Message, ModalContainer, Overlay } from "./styles";

interface ModalProps {
  message: string;
  onClose: () => void;
}

export function Modal({ message, onClose }: ModalProps) {
  return (
    <Overlay>
      <ModalContainer>
        <Message>{message}</Message>
        <Button onClick={onClose}>OK</Button>
      </ModalContainer>
    </Overlay>
  );
}
