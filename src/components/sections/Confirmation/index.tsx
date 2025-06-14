import { Container, Content, GoConfirmationPage, Image, Text } from "./styles";

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

          <GoConfirmationPage to="/confirmation">
            Clique aqui para confirmar presença
          </GoConfirmationPage>
        </Text>
        <Image>
          <div></div>
        </Image>
      </Content>
    </Container>
  );
}
