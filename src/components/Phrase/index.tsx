import { Container } from "./styles";
import imagePhrase from "../../assets/flor1.png";


export function Phrase() {
  return (
    <Container>
      <div>

        <p>
          "A amizade e a alegria são as maiores riquezas que alguém pode ter" 
        </p>
        <p>
          e foi assim que nossa história começou e segue até hoje!
        </p>
        <p>
          Estamos muito felizes em compartilhar esse momento especial com vocês.
        </p>
        <p>
          Este espaço foi criado para dividirmos detalhes sobre o grande dia
          </p>
        <p>
          e celebrar juntos essa nova etapa.
        </p>
      </div>
      <img src={imagePhrase} alt="phrase" />
    </Container>
  )
}