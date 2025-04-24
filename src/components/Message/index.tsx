import { BackTop, Container, Content, Signature, Text } from "./styles";
import imageflor4 from "../../assets/flor4.png";
import signature from "../../assets/beatrizeiagobranco.png";
import { FaChevronUp } from "react-icons/fa6";

export function Message() {
  return (
    <Container>
      <img src={imageflor4} alt="" />
      <Content>
        <Text>
          <a href="#"> Deixe sua mensagem </a>
          <p>"Quem não gosta de samba, bom sujeito não é"</p>
          <p>Queremos sentir o carinho de vocês! Deixe uma mensagem,</p>
          <p>
            um conselho ou apenas um versinho de samba para nos fazer sorrir.
          </p>
          <p>Estamos contando os dias para celebrar com samba no pé,</p>
          <p>taça na mão e muita alegria!</p>
          <p>Com carinho,</p>
        </Text>

        <Signature>
          <img className="signature-image" src={signature} alt="" />
        </Signature>
        <BackTop>
          <a href="/">
            <FaChevronUp size={20} color="#fff" />
            Voltar ao top
          </a>
        </BackTop>
      </Content>
    </Container>
  );
}
