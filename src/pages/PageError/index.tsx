import { Link } from "react-router-dom";
import { Container } from "./styles";

export function PageError() {
  return (
    <Container>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você tentou acessar não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </Container>
  );
}
