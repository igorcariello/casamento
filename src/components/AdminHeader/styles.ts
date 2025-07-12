import styled from "styled-components";

interface DrawerProps {
  isOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  padding: 1rem clamp(1rem, 4vw, 2rem);
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.div`
  position: relative; /* Para posicionar o hamburger */
  display: flex;
  align-items: center;
  justify-content: center; /* Título centralizado */
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;

  h1 {
    font-size: 1.5rem;
    margin: 0;
    white-space: nowrap;
    max-width: 70vw;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    flex: 1; /* Para ocupar espaço central */
  }
`;

export const Hamburger = styled.button`
  position: absolute; /* Posicionar no canto esquerdo */
  left: 1rem;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  cursor: pointer;

  @media (min-width: 869px) {
    display: none;
  }
`;

export const DesktopMenu = styled.nav`
  display: none;

  @media (min-width: 869px) {
    display: block;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0;
      padding: 0;

      li a,
      li button {
        text-decoration: underline;
        color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
        font-weight: 600;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        padding: 0.2rem 0.5rem;
        border-radius: 6px;
        transition: background-color 0.2s;

        &:hover,
        &:focus {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
          outline: none;
        }
      }

      li button.sair {
        background-color: ${({ theme }) => theme.COLORS.RED_500};
        color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
        padding: 0.3rem 0.8rem;
        border-radius: 6px;
        font-weight: 700;
        transition: background-color 0.2s, color 0.2s;

        &:hover,
        &:focus {
          background-color: ${({ theme }) => theme.COLORS.RED_100};
          color: ${({ theme }) => theme.COLORS.RED_500};
          outline: none;
        }
      }
    }
  }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

export const Drawer = styled.nav<DrawerProps>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-280px")};
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  padding: 2rem 1.5rem;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  transition: left 0.3s ease;
  z-index: 10;

  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li a,
    li button {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
      background: none;
      border: none;
      cursor: pointer;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: background-color 0.2s;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
        outline: none;
      }
    }

    li button.sair {
      background-color: ${({ theme }) => theme.COLORS.RED_500};
      color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
      padding: 0.75rem 1rem;
      border-radius: 6px;
      font-weight: 700;
      transition: background-color 0.2s, color 0.2s;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.COLORS.RED_100};
        color: ${({ theme }) => theme.COLORS.RED_500};
        outline: none;
      }
    }
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 2.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  cursor: pointer;
  margin-bottom: 2rem;
`;
