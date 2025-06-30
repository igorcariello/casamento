import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  floating?: boolean;
  visible?: boolean;
}

export const Container = styled.header<HeaderProps>`
  margin-top: 2rem;
  width: 100%;

  position: ${({ floating }) => (floating ? "fixed" : "relative")};
  top: ${({ floating }) => (floating ? "0" : "auto")};
  left: 0;
  right: 0;
  
  
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  
  background: ${({ floating, theme }) => (floating ? theme.COLORS.BACKGROUND_4 : "transparent")};

  margin-top: ${({ floating }) => (floating ? "0" : "2rem")};

  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ( width <= 712px) {
    margin-top: 0;
    height: 5rem;
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    transform: translateY(0);
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
    z-index: 100;

  }

`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space;
  margin: 0 auto;

  overflow: hidden;

  display: flex;
  align-items: center;
 
  position: relative;

  max-width: 62.5rem;

  > a {
    display: flex;
    align-items: center;
    
    
    > img {
      width: 4rem;
      height: 3rem;
    }
  }

  > nav {
    > ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 3rem;

      li {
        list-style: none;
        text-transform: uppercase;
        
        font-family: 'Avenir Book', sans-serif;
        font-weight: 600;
        font-size: 0.75rem;
        text-align: center;

        
        cursor: pointer;

        @media (width < 712px) {
          font-size: 0.65rem;
        }

        @media (width < 400px) {
          font-size: 0.5rem;
        }
        
        a {
          
        }

        &:hover {
          filter: brightness(2.5);
          transition: all 0.3s ease-in-out;
        }
      }
    }

    @media (width <= 712px) {
      display: none;
    }
  }

  @media ( width <= 712px) {
    justify-content: center;
  }

`

export const MobileMenuButton = styled.div`
  display: none;
  
  > svg {
    width: 1.5rem;
    height: 1.5rem;
    
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    
    &[data-open="true"] {
      display: none;
    }
  }

  @media (width <= 712px) {
    display: block;
    position: absolute;
    left: 3rem;
    transform: translate(-50%);
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
    border: none;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    cursor: pointer;
    z-index: 110;
  }
`

export const GoHome = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
`
export const GoOursHistory = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
`
export const GoTipsForGuests = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
`
export const GoConfirmation = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
`
export const GoPresent = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
`
export const GoMessage = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
`

interface MobileMenuOverlay {
  isOpen: boolean
}

export const MobileMenuOverlay = styled.div<MobileMenuOverlay>`
  display: none;
  overflow: visible;

  @media (width <= 712px){
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100vh;
    
    background-color: white;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    
    
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(calc(-100% - 5px))")};
    transition: transform 0.3s ease-in-out;

    &[data-open="true"] {
      transform: translateX(0);
    }

    svg {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 1rem;
      right: 1rem;
      
      color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    }

    nav {
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-left: 2rem;
        padding-top: 6rem;
        
        li a {
          text-decoration: none;
          font-family: "Avenir Book", sans-serif;
          font-size: 1rem;
          color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
        
          &:hover { 
            filter: brightness(1.5);
          }
        }
      
      }
    }

    
  }
`