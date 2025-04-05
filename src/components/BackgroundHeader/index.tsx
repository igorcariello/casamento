import { Container, Content, Header } from "./styles";


export function BackgroundHeader() {
  return (
    <Container>
      <Header>
        <h1>BI</h1>
        <nav>
          <ul>
            <li>Nossa História</li>
            <li>Dicas Para os Convidados</li>
            <li>Confirmação de Presença</li>
            <li>Lista de Presentes</li>
          </ul>
        </nav>
      </Header>
      <Content>
        <h1> Beatriz e Iago</h1>
        <h2> 25 . OUTUBRO . 2025</h2>
        <p>NOVA FRIBURGO . RJ</p>
      </Content>
    </Container>
  )
}