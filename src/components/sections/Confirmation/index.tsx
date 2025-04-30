import { Container, Content, Image, Text } from "./styles";

export function Confirmation() {
  return (
    <Container id="confirmation">
      <Content>
        <Text>
          <h3>Confirmação de presença (RSVP)</h3>
          <p>
            Para nos ajudar a organizar tudo com muito carinho, confirme sua
            presença
          </p>
          <p>até o dia 10 de Setembro de 2025.</p>

          <a href="#">Clique aqui para confirmar presença</a>
        </Text>
        <Image>
          <div></div>
        </Image>
      </Content>
    </Container>
  );
}
