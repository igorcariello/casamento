import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Menu,
  Drawer,
  DrawerOverlay,
  Hamburger,
  DesktopMenu,
  CloseButton,
} from "./styles";
import { useAuth } from "../../hook/useAuth";

export function AdminHeader() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleSignOut() {
    signOut();
    navigate("/signin");
  }

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Menu>
        <Hamburger onClick={toggleDrawer} aria-label="Abrir menu">
          ☰
        </Hamburger>
        <DesktopMenu>
          <ul>
            <li>
              <Link to="/guests">Convidados</Link>
            </li>
            <li>
              <Link to="/confirmated">Confirmados</Link>
            </li>
            <li>
              <Link to="/reservations">Presentes reservados</Link>
            </li>
            <li>
              <Link to="/stock">Estoque</Link>
            </li>
            <li>
              <Link to="/checkinlist">Check-In realizados</Link>
            </li>
            <li>
              <Link to="/checkin-scanner">Escaner</Link>
            </li>
            <li>
              <button className="sair" onClick={handleSignOut}>
                Sair
              </button>
            </li>
          </ul>
        </DesktopMenu>
      </Menu>

      {isOpen && <DrawerOverlay onClick={closeDrawer} />}

      <Drawer isOpen={isOpen}>
        <CloseButton onClick={closeDrawer} aria-label="Fechar menu">
          ✕
        </CloseButton>
        <ul>
          <li>
            <Link to="/guests" onClick={closeDrawer}>
              Convidados
            </Link>
          </li>
          <li>
            <Link to="/board" onClick={closeDrawer}>
              Mensagens
            </Link>
          </li>
          <li>
            <Link to="/confirmated" onClick={closeDrawer}>
              Confirmados
            </Link>
          </li>
          <li>
            <Link to="/reservations" onClick={closeDrawer}>
              Presentes reservados
            </Link>
          </li>
          <li>
            <Link to="/stock" onClick={closeDrawer}>
              Estoque
            </Link>
          </li>
          <li>
            <Link to="/checkinlist" onClick={closeDrawer}>
              Check-In realizados
            </Link>
          </li>
          <li>
            <Link to="/checkin-scanner" onClick={closeDrawer}>
              Escaner
            </Link>
          </li>
          <li>
            <button onClick={handleSignOut}>Sair</button>
          </li>
        </ul>
      </Drawer>
    </Container>
  );
}
