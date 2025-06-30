import { Container, Content, GoPresentList } from "./styles";

export function Present() {
  return (
    <Container id="present">
      <Content>
        <h3>Lista de Presentes</h3>
        <p>A sua presença é o que realmente importa para nós!</p>
        <p>Mas para entrar no clima leve e descontraído da nossa celebração,</p>
        <p>criamos uma lista de presentes divertidos,</p>
        <p>porque rir e celebrar juntos faz parte do pacote.</p>
        <GoPresentList to="/presentlist" target="_blank">
          Acesse a Lista de Presentes
        </GoPresentList>
      </Content>
    </Container>
  );
}
