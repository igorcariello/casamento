import { useState } from "react";
import { CodeBox, CopyButton, CopyContainer } from "./styles";

export function CopyableCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Falha ao copiar o código.");
    }
  }

  return (
    <CopyContainer>
      <CodeBox>{code}</CodeBox>
      <CopyButton onClick={handleCopy}>
        {copied ? "Copiado!" : "Copiar código"}
      </CopyButton>
    </CopyContainer>
  );
}
