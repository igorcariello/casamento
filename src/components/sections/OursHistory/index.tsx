import { FaChevronDown } from "react-icons/fa6";
import { Carousel } from "../../Carousel";
import { Container, Content, Imagens, LoadMore } from "./styles";

export function OursHistory() {
  return (
    <Container id="oursHistory">
      <Content>
        <p>
          Foi em 2011, nos corredores do Externato Santa Ignez, nossa escola em
          Friburgo, que nossas vidas se cruzaram.
        </p>
        <p>
          Bia toda insegura e Iago, cheio de atitude, mesmo com a timidez. O
          primeiro beijo foi tradicional: no cinema, "assistindo" Os Vingadores.
        </p>
        <p>
          No início, o casinho era secreto, e nossos colegas de turma iam
          percebendo os sinais do casal se formando - a gente fingia que não
          tinha nada e eles fingiam que não viam...
        </p>
        <p>
          Nem a mãe de Iago sabia - foi conhecer Bia depois de mais de um ano do
          início de tudo (tá explicado os 13 anos até o casamento, né?).
        </p>
        <p>
          Enfim... Terminamos a escola, fizemos um ano de cursinho. Cada um em
          um diferente, estudávamos juntos todo dia de manhã até que... com a
          exata mesma nota, fomos aprovados na mesma faculdade.
        </p>
        <p>
          Seguimos juntos para Vassouras, onde dividimos não só a faculdade, mas
          também cada conquista, desafio e aprendizado.
        </p>
        <p>
          Ao longo dessa caminhada, amigos incríveis se somaram a nós, com os
          quais dividimos histórias hilárias e inesquecíveis.
        </p>
        <p>
          Entre Bom Jardim, Friburgo, Vassouras, Rio e São Paulo, já vivemos
          tanto! E vocês fazem parte disso.
        </p>
        <p>
          Viajar, explorar novos sabores e descobrir a beleza da vida ao lado
          dos amigos é o que mais amamos fazer.
        </p>
        <p>
          E agora chegou a hora de celebrar nosso amor, ao ritmo do samba e com
          a alegria de todos vocês!
        </p>
      </Content>
      <Imagens>
        <div id="home1"></div>
        <div id="home2"></div>
        <div id="home3"></div>
        <div id="home4"></div>
        <div id="home5"></div>
        <div id="home6"></div>
        <div id="home7"></div>
        <div id="home8"></div>
        <div id="home9"></div>
      </Imagens>
      <Carousel />
      <LoadMore href="/gallery" target="_blank">
        <span>Carregar mais</span>
        <FaChevronDown
          size={20}
          color="${({theme}) => theme.COLORS.BACKGROUND_8}"
        />
      </LoadMore>
    </Container>
  );
}
