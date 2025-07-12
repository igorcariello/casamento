import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { api } from "../../lib/axios";
import { Container, Content, Title, ReaderWrapper, Message } from "./styles";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";

export function CheckInScanner() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const lastDecodedRef = useRef<string>("");

  useEffect(() => {
    const scanner = new Html5Qrcode("reader");
    scannerRef.current = scanner;

    let isScanning = true;

    const startScanner = async () => {
      try {
        await scanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          async (decodedText) => {
            if (decodedText === lastDecodedRef.current) return;
            lastDecodedRef.current = decodedText;

            if (isScanning) {
              isScanning = false;

              try {
                await scanner.stop();
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
            }
          },
          () => {} // ignore scan errors
        );
      } catch (err) {
        console.error("Erro ao iniciar scanner:", err);
      }
    };

    startScanner();

    return () => {
      if (isScanning) {
        scanner.stop().catch(() => {});
      }
    };
  }, []);

  function handleCloseModal() {
    setModalMessage(null);
    navigate("/checkinlist");
  }

  return (
    <Container>
      <Content>
        <Title>Leitor de QR Code - Check-in</Title>

        <ReaderWrapper id="reader" />

        <Message>
          Posicione o QR Code no centro da câmera para confirmar chegada
        </Message>

        {modalMessage && (
          <Modal message={modalMessage} onClose={handleCloseModal} />
        )}
      </Content>
    </Container>
  );
}
