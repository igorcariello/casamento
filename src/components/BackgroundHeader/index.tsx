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
            <li>
              <a href="#oursHistory">Nossa História</a>
            </li>
            <li>
              <a href="#tipsForGuests">Dicas Para os Convidados</a>
            </li>
            <li>
              <a href="#confirmation">Confirmação de Presença</a>
            </li>
            <li>
              <a href="#present">Lista de Presentes</a>
            </li>
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
