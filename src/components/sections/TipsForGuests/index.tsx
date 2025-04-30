import { Container, Content, DressCode, Image, Transport } from "./styles";

export function TipsForGuests() {
  return (
    <Container id="tipsForGuests">
      <Content>
        <DressCode>
          <h3>Dress Code:</h3>
          <p>Esqueça as gravatas e os saltos finos!</p>
          <p>Traga uma rasteirinha para a gente dançar muito.</p>
          <p>Queremos todos confortáveis para curtir um fim de tarde leve</p>
          <p>e animado em meio à natureza.</p>
          <p>
            Afinal, como já dizia o samba: "Deixa a vida me levar, vida leva
            eu".
          </p>
        </DressCode>
        <Transport>
          <h3>Transporte:</h3>
          <p>
            Como o restaurante é retirado da cidade e Uber tem poucos carros
          </p>
          <p>em Nova Friburgo, sugerimos usar táxi ou 99 Táxi.</p>
          <p>Assim, todos podem aproveitar com tranquilidade e segurança.</p>
          <p>Melhor não dirigir após brindar conosco!</p>
        </Transport>
        <Image />
      </Content>
    </Container>
  );
}
