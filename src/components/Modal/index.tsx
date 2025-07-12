import { Overlay, ModalBox } from "./styles";

interface ModalProps {
  message: string;
  onClose: () => void;
}

export function Modal({ message, onClose }: ModalProps) {
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalBox>
    </Overlay>
  );
}
