import { useState } from "react";
import BI from "../../assets/BI.png";
import {
  Container,
  Content,
  GoConfirmation,
  GoHome,
  GoMessage,
  GoOursHistory,
  GoPresent,
  GoTipsForGuests,
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

        <GoHome to="/#background-header" className="logo">
          <img src={BI} alt="logo B I" />
        </GoHome>

        <nav>
          <ul>
            <li>
              <GoOursHistory to="/#oursHistory">Nossa História</GoOursHistory>
            </li>
            <li>
              <GoTipsForGuests to="/#tipsForGuests">
                Dicas Para Convidados
              </GoTipsForGuests>
            </li>
            <li>
              <GoConfirmation to="/#confirmation">
                Confirmação de Presença
              </GoConfirmation>
            </li>
            <li>
              <GoPresent to="/presentlist">Lista de Presentes</GoPresent>
            </li>
          </ul>
        </nav>

        <MobileMenuOverlay isOpen={isMenuOpen} data-open={isMenuOpen}>
          <IoCloseOutline onClick={toggleMenu} />
          <nav>
            <ul>
              <li>
                <GoOursHistory onClick={toggleMenu} to="/#oursHistory">
                  Nossa História
                </GoOursHistory>
              </li>
              <li>
                <GoTipsForGuests onClick={toggleMenu} to="/#tipsForGuests">
                  Dicas Para Convidados
                </GoTipsForGuests>
              </li>
              <li>
                <GoConfirmation onClick={toggleMenu} to="/#confirmation">
                  Confirmação de Presença
                </GoConfirmation>
              </li>
              <li>
                <GoPresent onClick={toggleMenu} to="/presentlist">
                  Lista de Presentes
                </GoPresent>
              </li>
              <li>
                <GoMessage onClick={toggleMenu} to="/#message">
                  Mensagens
                </GoMessage>
              </li>
            </ul>
          </nav>
        </MobileMenuOverlay>
      </Content>
    </Container>
  );
}
