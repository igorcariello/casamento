import { Container, Header } from "./styles";
import backgroundVideo from "../../assets/Savethedate.mp4";

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
      <video autoPlay loop id="background-header">
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5
      </video>
    </Container>
  );
}
