import { Container, Content, Header } from "./styles";
import backgroundVideo from "../../assets/background-horizontal-1920x1080px.mp4";
import BI from "../../assets/BI.png";
import beatrizeiagoverde from "../../assets/biaeiagoverde.png";
import backgroundVideoVertical from "../../assets/background-vertical-invertido-1080x1920px.mp4";

export function BackgroundHeader() {
  return (
    <Container id="navigation">
      <video autoPlay muted loop id="background-header">
        <source id="horizontal" src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5
      </video>

      <video autoPlay muted loop id="background-vertical">
        <source id="vertical" src={backgroundVideoVertical} type="video/mp4" />
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
              <a href="#tipsForGuests">Dicas Para Convidados</a>
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
