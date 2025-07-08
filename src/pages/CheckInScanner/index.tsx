import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { api } from "../../lib/axios";

export function CheckInScanner() {
  useEffect(() => {
    const scanner = new Html5Qrcode("reader");

    let lastDecoded = "";

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      async (decodedText) => {
        if (decodedText === lastDecoded) return;
        lastDecoded = decodedText;

        console.log("QR Code decoded:", decodedText);

        try {
          const response = await api.post("/checkin", {
            code: decodedText.trim(),
          });

          const { success, message, alreadyCheckedIn } = response.data;

          if (success) {
            alert(alreadyCheckedIn ? `⚠️ ${message}` : `✅ ${message}`);
          } else {
            alert(`❌ ${message}`);
          }
        } catch (err) {
          console.error(err);
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
    <div>
      <h1>Leitor de QR Code - Check-in</h1>
      <div id="reader" />
    </div>
  );
}
