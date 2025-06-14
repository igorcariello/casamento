import { Link, useNavigate } from "react-router-dom";
import { Container, Menu } from "./styles";
import { useAuth } from "../../hook/useAuth";

export function AdminHeader() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/signin");
  }
  return (
    <Container>
      <Menu>
        <li>
          <div>
            <ul>
              <Link to="/guests">Convidados</Link>
            </ul>
            <ul>
              <Link to="/board">Mensagens</Link>
            </ul>
            <ul>
              <Link to="/confirmated">Confirmados</Link>
            </ul>
          </div>
          <ul>
            <button onClick={() => handleSignOut()}>Sair</button>
          </ul>
        </li>
      </Menu>
    </Container>
  );
}
