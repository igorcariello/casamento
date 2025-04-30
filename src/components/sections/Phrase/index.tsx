import { Container, Content } from "./styles";
import imagePhrase from "../../../assets/flor1.png";

export function Phrase() {
  return (
    <Container>
      <div>
        <Content>
          <p>Estamos muito felizes em compartilhar</p>
          <p>esse momento especial com vocês.</p>
          <p>Este espaço foi criado para dividirmos detalhes</p>
          <p>sobre o nosso grande dia e celebrar juntos essa nova etapa.</p>
        </Content>
        <img src={imagePhrase} alt="phrase" />
      </div>
    </Container>
  );
}
