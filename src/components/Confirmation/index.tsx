import { Container, Content, Image } from "./styles";

export function Confirmation() {
  return (
    <Container id="confirmation">
      <Content>
        <h3>Confirmação de presença (RSVP)</h3>
        <p>
          Para nos ajudar a organizar tudo com muito carinho, confirme sua
          presença até o dia 10 de Setembro de 2025.
        </p>

        <a href="/">Clique aqui para confirmar a sua presença</a>
      </Content>
      <Image>
        <div id="flores"></div>
      </Image>
    </Container>
  );
}
