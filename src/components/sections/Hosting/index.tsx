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
              <h4>Hotel Habitare</h4>
              <p>R. Augusto Cardoso, 71</p>
              <p>Centro | 22 2519.8700</p>
            </Hotel>
            <Hotel>
              <h4>Hotel São Paulo</h4>
              <p>R. Monsenhor Miranda, 41</p>
              <p>Centro | 22 2212.0454</p>
            </Hotel>
            <Hotel>
              <h4>Hotel Dominguez Plaza</h4>
              <p>Praça Suspiro, 114</p>
              <p>Centro | 22 2523.9787</p>
            </Hotel>
          </Group1>
          <Group2>
            <Hotel>
              <h4>Hotel Vila Suiça</h4>
              <p>Av. Manoel Carneiro de Menezes</p>
              <p>Mury | 22 99964.2787</p>
            </Hotel>
            <Hotel>
              <h4>Refúgio dos Falcões</h4>
              <p>Estrada Mury-Lumiar, Km 2,5</p>
              <p>Alto 50 | 22 97405-9916</p>
            </Hotel>
          </Group2>
        </Hotels>
      </Content>
    </Container>
  );
}
