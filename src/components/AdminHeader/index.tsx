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
            <ul>
              <Link to="/reservations">Presentes reservados</Link>
            </ul>
            <ul>
              <Link to="/stock">Estoque</Link>
            </ul>
            <ul>
              <Link to="/checkinlist">Check-In realizados</Link>
            </ul>
            <ul>
              <Link to="/checkin-scanner">Escaner</Link>
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
