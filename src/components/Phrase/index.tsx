import { Container } from "./styles";
import imagePhrase from "../../assets/flor4.png";


export function Phrase() {
  return (
    <Container>
      <p>
        "A amizade e a alegria são as maiores riquezas que alguém pode ter" 
        e foi assim que nossa história começou e segue até hoje!
        Estamos muito felizes em compartilhar esse momento especial com vocês. 
        Este espaço foi criado para dividirmos detalhes sobre o grande dia
        e celebrar juntos essa nova etapa.
      </p>
      <img src={imagePhrase} alt="phrase" />
    </Container>
  )
}