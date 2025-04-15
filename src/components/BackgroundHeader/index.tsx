import { Container, Content, Header } from "./styles";
import backgroundVideo from "../../assets/background-horizontal-1920x1080px.mp4";
import BI from "../../assets/BI.png";
import beatrizeiagoverde from "../../assets/biaeiagoverde.png";

export function BackgroundHeader() {
  return (
    <Container>
      <video autoPlay muted loop id="background-header">
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5
      </video>
      <Header>
        <img src={BI} alt="logo B I" />
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
        <img src={beatrizeiagoverde} alt="Beatriz e Iago" />
        <div className="text-wrapper">
          <h2>25 . outubro . 2025</h2>
          <p>Nova Friburgo</p>
        </div>
      </Content>
    </Container>
  );
}
