import { Container, Content } from "./styles";

export function Address() {
  return (
    <Container>
      <Content>
        <p>25 de outubro de 2025 | sábado | 15h30</p>
        <p>Restaurante Trilhas do Araçari</p>
        <p>Rua Gertrudes Stern, 4400</p>
        <p>Mury | Nova Friburgo | RJ</p>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Trilhas+do+Ara%C3%A7ari/@-22.3592851,-42.5279293,17z/data=!3m1!4b1!4m6!3m5!1s0x9789bcf3116c6f:0x1d8a4b0c24921a52!8m2!3d-22.3592901!4d-42.5253544!16s%2Fg%2F1tfnv6nd?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
        >
          {" "}
          Como chegar &rsaquo;
        </a>
      </Content>
    </Container>
  );
}
