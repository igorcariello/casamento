import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { api } from "../../lib/axios";
import { Container, Content, Title, ReaderWrapper, Message } from "./styles";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";

export function CheckInScanner() {
  const [scanning, setScanning] = useState(true);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const lastDecodedRef = useRef<string>("");

  useEffect(() => {
    if (!scanning) return;

    const scanner = new Html5Qrcode("reader");
    scannerRef.current = scanner;

    const startScanner = async () => {
      try {
        await scanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          async (decodedText) => {
            if (decodedText === lastDecodedRef.current) return;
            lastDecodedRef.current = decodedText;

            try {
              await scanner.stop();
              setScanning(false);
            } catch (err) {
              console.warn("Erro ao parar scanner:", err);
            }

            try {
              const response = await api.post("/checkin", {
                code: decodedText.trim(),
              });
              const { success, message } = response.data;
              setModalMessage(success ? `✅ ${message}` : `❌ ${message}`);
            } catch (error) {
              console.error(error);
              setModalMessage("❌ Erro ao confirmar check-in.");
            }
          },
          () => {}
        );
      } catch (err) {
        console.error("Erro ao iniciar scanner:", err);
      }
    };

    startScanner();

    return () => {
      scanner.stop().catch(() => {});
    };
  }, [scanning]);

  function handleCloseModal() {
    setModalMessage(null);
    navigate("/checklist");
  }

  return (
    <Container>
      <Content>
        <Title>Leitor de QR Code - Check-in</Title>

        {scanning ? (
          <>
            <ReaderWrapper id="reader" />
            <Message>
              Posicione o QR Code no centro da câmera para confirmar chegada
            </Message>
          </>
        ) : (
          <Message>✅ Check-in realizado. Scanner parado.</Message>
        )}

        {modalMessage && (
          <Modal message={modalMessage} onClose={handleCloseModal} />
        )}
      </Content>
    </Container>
  );
}
