import { Container, Content, Signature } from "./styles";
import imageflor4 from "../../assets/flor4.png";

export function Message() {
  return (
    <Container>
      <div>
        <img src={imageflor4} alt="" />

        <Content>
          <h3>Escreva sua mensagem</h3>
          <p>Estamos contando os dias para celebrar com samba no pé,</p>
          <p>taça na mão e muita alegria!</p>
          <p>Com carinho,</p>
        </Content>
      </div>

      <Signature>
        <div></div>
      </Signature>
    </Container>
  );
}
