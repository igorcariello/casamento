import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import axios from "axios";
import { Container, Content, Title, ReaderWrapper, Message } from "./styles";

export function CheckInScanner() {
  useEffect(() => {
    const scanner = new Html5Qrcode("reader");

    scanner.start(
      { facingMode: "environment" }, // câmera traseira
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      async (decodedText) => {
        console.log("QR Code decoded:", decodedText);

        try {
          const response = await axios.patch(
            `http://localhost:3334/checkin/${decodedText}`
          );
          alert(response.data.message);
        } catch (error) {
          console.error(error);
          alert("Erro ao confirmar check-in.");
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
