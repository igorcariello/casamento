import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { api } from "../../lib/axios";
import { Container, Content, Title, ReaderWrapper, Message } from "./styles";
import axios, { AxiosError } from "axios";

export function CheckInScanner() {
  useEffect(() => {
    const scanner = new Html5Qrcode("reader");

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      async (decodedText) => {
        console.log("QR Code decoded:", decodedText);

        try {
          const response = await api.post("/checkin", {
            code: decodedText.trim(),
          });

          const { success, message, alreadyCheckedIn } = response.data;

          if (success) {
            if (alreadyCheckedIn) {
              alert(`⚠️ ${message}`);
            } else {
              alert(`✅ ${message}`);
            }
          } else {
            alert(`❌ ${message}`);
          }
        } catch (err) {
          console.error(err);

          let errorMessage = "Erro ao confirmar check-in.";

          if (axios.isAxiosError(err)) {
            const axiosError = err as AxiosError<{ message: string }>;
            errorMessage =
              axiosError.response?.data?.message ||
              axiosError.message ||
              errorMessage;
          } else if (err instanceof Error) {
            errorMessage = err.message;
          }

          alert(errorMessage);
        }
      },
      (errorMessage) => {
        console.warn("QR Code scan error:", errorMessage);
      }
    );

    return () => {
      scanner.stop().catch((err) => console.log("Erro ao parar scanner", err));
    };
  }, []);

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
