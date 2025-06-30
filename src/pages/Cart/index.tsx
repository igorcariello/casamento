import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { priceFormatter } from "../../utils/formatted";
import QRCode from "react-qr-code";
import {
  Container,
  Content,
  Description,
  Image,
  Price,
  QRCodeInfo,
  QRCodeSection,
  SectionTitle,
  Title,
  CustomAmountWrapper,
} from "./styles";
import { CopyableCode } from "../../components/CopyableCode";
import { api } from "../../lib/axios";

interface Present {
  id: number;
  src: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  is_variable_price?: boolean;
}

function calculateCRC16(data: string): string {
  let crc = 0xffff;
  const polynom = 0x1021;
  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) crc = ((crc << 1) ^ polynom) & 0xffff;
      else crc = (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function createTLV(tag: string, value: string): string {
  const len = value.length.toString().padStart(2, "0");
  return `${tag}${len}${value}`;
}

function removeAccents(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function generateBRCode(
  pixKey: string,
  amount: number,
  merchantName: string,
  merchantCity: string
): string {
  const pfi = createTLV("00", "01");
  const gui = createTLV("00", "BR.GOV.BCB.PIX");
  const key = createTLV("01", pixKey);
  const mai = createTLV("26", gui + key);
  const mcc = createTLV("52", "0000");
  const curr = createTLV("53", "986");
  const amt = createTLV("54", amount.toFixed(2));
  const ctry = createTLV("58", "BR");
  const nm = createTLV(
    "59",
    removeAccents(merchantName).toUpperCase().slice(0, 25)
  );
  const ct = createTLV(
    "60",
    removeAccents(merchantCity).toUpperCase().slice(0, 15)
  );
  const txid = createTLV("05", "***");
  const add = createTLV("62", txid);

  const raw = pfi + mai + mcc + curr + amt + ctry + nm + ct + add + "6304";

  return raw + calculateCRC16(raw);
}

export function Cart() {
  const { id } = useParams<{ id: string }>();
  const presentID = Number(id);
  const [present, setPresent] = useState<Present | null>(null);
  const [brCode, setBrCode] = useState<string>("");
  const [amountDigits, setAmountDigits] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isVariable = Boolean(present?.is_variable_price);

  const formattedAmount = (parseInt(amountDigits || "0") / 100).toFixed(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito
    setAmountDigits(rawValue);
    setCustomAmount(parseInt(rawValue || "0") / 100);
  };

  useEffect(() => {
    async function fetchPresent() {
      try {
        const res = await api.get<Present>(`/products/${presentID}`);
        setPresent(res.data);
      } catch {
        setError("Presente não encontrado.");
      }
    }
    if (!isNaN(presentID)) fetchPresent();
    else setError("ID inválido.");
  }, [presentID]);

  useEffect(() => {
    if (!present) return;
    const pixKey = import.meta.env.VITE_RECEIVER_PIX_KEY!;
    const merchantName = import.meta.env.VITE_MERCHANT_NAME!;
    const merchantCity = import.meta.env.VITE_MERCHANT_CITY!;
    const amount = present.is_variable_price
      ? customAmount || 0
      : present.price / 100;
    if (amount > 0) {
      setBrCode(generateBRCode(pixKey, amount, merchantName, merchantCity));
    } else {
      setBrCode("");
    }
  }, [present, customAmount]);

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      {present && (
        <Content>
          <Title>{present.title}</Title>
          <Image src={present.src} alt={present.title} />
          <Description>{present.description}</Description>

          {!isVariable && (
            <Price>{priceFormatter.format(present.price / 100)}</Price>
          )}

          {isVariable && (
            <CustomAmountWrapper>
              <label htmlFor="customAmount">Digite o valor desejado:</label>
              <div className="input-container">
                <span>R$</span>
                <input
                  type="text"
                  id="customAmount"
                  value={formattedAmount.replace(".", ",")}
                  onChange={handleInputChange}
                  inputMode="numeric"
                />
              </div>
            </CustomAmountWrapper>
          )}

          <QRCodeSection>
            <SectionTitle>Pagamento via Pix</SectionTitle>
            {brCode ? (
              <>
                <QRCode value={brCode} size={256} />
                <CopyableCode code={brCode} />
              </>
            ) : (
              <p>Digite o valor para gerar o QR Code</p>
            )}
            <QRCodeInfo>
              Escaneie o QR Code ou copie o código no seu app de banco.
            </QRCodeInfo>
          </QRCodeSection>
        </Content>
      )}
    </Container>
  );
}
