import { useState } from "react";
import BI from "../../assets/BI.png";
import {
  Container,
  Content,
  MobileMenuButton,
  MobileMenuOverlay,
} from "./styles";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";

interface HeaderProps {
  visible?: boolean;
  floating?: boolean;
}

export function Header({ visible, floating }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <Container visible={visible} floating={floating}>
      <Content>
        <MobileMenuButton>
          <TiThMenu onClick={toggleMenu} data-open={isMenuOpen} />
        </MobileMenuButton>

        <a href="/" className="logo">
          <img src={BI} alt="logo B I" />
        </a>

        <nav>
          <ul>
            <li>
              <a href="#oursHistory">Nossa História</a>
            </li>
            <li>
              <a href="#tipsForGuests">Dicas Para Convidados</a>
            </li>
            <li>
              <a href="#confirmation">Confirmação de Presença</a>
            </li>
            <li>
              <a href="#present">Lista de Presentes</a>
            </li>
          </ul>
        </nav>

        <MobileMenuOverlay isOpen={isMenuOpen} data-open={isMenuOpen}>
          <IoCloseOutline onClick={toggleMenu} />
          <nav>
            <ul>
              <li>
                <a href="#oursHistory">Nossa História</a>
              </li>
              <li>
                <a href="#tipsForGuests">Dicas Para Convidados</a>
              </li>
              <li>
                <a href="#confirmation">Confirmação de Presença</a>
              </li>
              <li>
                <a href="#present">Lista de Presentes</a>
              </li>
            </ul>
          </nav>
        </MobileMenuOverlay>
      </Content>
    </Container>
  );
}
