import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { api } from "../../lib/axios";
import { Container, Content, Title, ReaderWrapper, Message } from "./styles";
import { useNavigate } from "react-router-dom";

export function CheckInScanner() {
  const [scanning, setScanning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5Qrcode("reader");
    let lastDecoded = "";

    async function startScanner() {
      try {
        await scanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          async (decodedText) => {
            const code = decodedText.trim();

            if (code === lastDecoded) return;
            lastDecoded = code;

            console.log("QR Code decoded:", code);

            // Para o scanner antes do alerta
            await scanner.stop();
            setScanning(false);

            try {
              const response = await api.post("/checkin", { code });
              const { success, message } = response.data;

              alert(success ? `✅ ${message}` : `❌ ${message}`);

              navigate("/checkinlist");
            } catch (err) {
              console.error(err);
              alert("❌ Erro ao confirmar check-in.");
              navigate("/checkinlist");
            }
          },
          (errorMessage) => {
            console.warn("QR Code scan error:", errorMessage);
          }
        );
      } catch (err) {
        console.error("Erro ao iniciar scanner:", err);
      }
    }

    if (scanning) {
      startScanner();
    }

    return () => {
      scanner.stop().catch((err) => console.log("Erro ao parar scanner", err));
    };
  }, [scanning, navigate]);

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
      </Content>
    </Container>
  );
}
