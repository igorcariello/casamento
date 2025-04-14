import { Container, Content, DressCode, Image, Transport } from "./styles";




export function TipForGuests() {
  return (
    <Container>
      <Content>
        <DressCode>
          <h3>
            Dress Code:
          </h3>
          <p>
            Esqueça as gravatas e os saltos finos!
          </p>
          <p>
            Queremos todos confortáveis para curtir uma tarde leve
            e animada em meio à natureza.
          </p>
          <p>
            «Deixa a vida me levar, vida leva eu".    
          </p>
        </DressCode>
        <Image/>
      </Content>
      <Transport>
        <h3>
          Transporte:
        </h3>
        <p> 
          Como o restaurante é retirado da cidade e Uber tem poucos carros em Nova Friburgo,
          sugerimos usar táxi ou 99 Táxi. Assim, todos podem aproveitar com tranquilidade e segurança.
        </p>
        <p>
          Melhor não dirigir após brindar conosco!
        </p>
      </Transport>
      
    </Container>
  )
}