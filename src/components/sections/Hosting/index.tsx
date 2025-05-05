import {
  Container,
  Content,
  Group1,
  Group2,
  Header,
  Hotel,
  Hotels,
} from "./styles";

export function Hosting() {
  return (
    <Container>
      <Content>
        <Header>
          <h3>Hospedagem:</h3>
          <p>
            Para quem vem de fora ou quiser estender a festa, recomendamos
            algumas opções:
          </p>
        </Header>
        <Hotels>
          <Group1>
            <Hotel>
              <h4>
                <a target="_blank" href="https://hotelhabitare.com.br/">
                  Hotel Habitare
                </a>
              </h4>
              <p>R. Augusto Cardoso, 71</p>
              <p>Centro | 22 2519.8700</p>
            </Hotel>
            <Hotel>
              <h4>
                <a target="_blank" href="https://hotelsaopaulo.com.br/home/">
                  Hotel São Paulo
                </a>
              </h4>
              <p>R. Monsenhor Miranda, 41</p>
              <p>Centro | 22 2212.0454</p>
            </Hotel>
            <Hotel>
              <h4>
                <a target="_blank" href="https://www.hoteldominguez.com.br/">
                  Hotel Dominguez Plaza
                </a>
              </h4>
              <p>Praça Suspiro, 114</p>
              <p>Centro | 22 2523.9787</p>
            </Hotel>
          </Group1>
          <Group2>
            <Hotel>
              <h4>
                <a target="_blank" href="https://www.vilasuica1818.com.br/">
                  Hotel Vila Suiça
                </a>
              </h4>
              <p>Av. Manoel Carneiro de Menezes</p>
              <p>Mury | 22 99964.2787</p>
            </Hotel>
            <Hotel>
              <h4>
                <a
                  target="_blank"
                  href="https://www.instagram.com/pousadarefugiodosfalcoes/"
                >
                  Refúgio dos Falcões
                </a>
              </h4>
              <p>Estrada Mury-Lumiar, Km 2,5</p>
              <p>Alto 50 | 22 97405.9916</p>
            </Hotel>
            <Hotel>
              <h4>
                <a target="_blank" href="https://hotelbucsky.com.br/">
                  Hotel Bucsky
                </a>
              </h4>
              <p>Rodovia RJ-116, KM 76</p>
              <p>Ponte da Saudade | 22 2212.1700</p>
            </Hotel>
          </Group2>
        </Hotels>
      </Content>
    </Container>
  );
}
