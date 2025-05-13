import { Container, Content, ContentWrapper } from "./styles";
import backgroundVideo from "../../../assets/background-horizontal-1920x856px.mp4";
import beatrizeiagoverde from "../../../assets/biaeiagoverde.png";
import backgroundVideoVertical from "../../../assets/background-vertical-invertido-1080x1920px.mp4";
import { Header } from "../../Header";

export function BackgroundHeader() {
  return (
    <Container id="background-header">
      <ContentWrapper>
        <video autoPlay muted loop id="background-horizontal">
          <source id="horizontal" src={backgroundVideo} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5
        </video>

        <video autoPlay muted loop id="background-vertical">
          <source
            id="vertical"
            src={backgroundVideoVertical}
            type="video/mp4"
          />
          Seu navegador não suporta vídeos HTML5
        </video>

        <Header />

        <Content>
          <img src={beatrizeiagoverde} alt="Beatriz e Iago" />
          <div className="text-wrapper">
            <h2>25 . outubro . 2025</h2>
            <p>Nova Friburgo</p>
          </div>
        </Content>
      </ContentWrapper>
    </Container>
  );
}
