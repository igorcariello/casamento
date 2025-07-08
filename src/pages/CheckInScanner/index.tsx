import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { Container, Content, Title, ReaderWrapper, Message } from "./styles";

export function CheckInScanner() {
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5Qrcode("reader");

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      async (decodedText) => {
        console.log("QR Code decoded:", decodedText);

        try {
          const response = await api.post("/checkin", { code: decodedText });
          const { success, message } = response.data;

          alert(success ? `✅ ${message}` : `❌ ${message}`);

          // 🔥 Redireciona após confirmar
          navigate("/checkinlist");
        } catch (err) {
          console.error(err);
          alert("❌ Erro ao confirmar check-in.");
        }

        await scanner.stop();
      },
      (errorMessage) => {
        console.warn("QR Code scan error:", errorMessage);
      }
    );

    return () => {
      scanner.stop().catch((err) => console.log("Erro ao parar scanner", err));
    };
  }, [navigate]);

  return (
    <Container>
      <Content>
        <Title>Leitor de QR Code - Check-in</Title>
        <ReaderWrapper id="reader" />
        <Message>
          Posicione o QR Code no centro da câmera para confirmar chegada
        </Message>
      </Content>
    </Container>
  );
}
