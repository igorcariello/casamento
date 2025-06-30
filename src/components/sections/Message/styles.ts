import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  
  padding: 5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  
`

export const MainContentWrapper = styled.div`
  position: relative;
  max-width: 62.5rem;
  width: 100%;


`

export const FloralImage = styled.img`
  width: 14rem;
  height: auto;

  position: absolute;
  z-index: 0;
  
  top: 2rem;
  left: 6rem;

  @media (max-width: 960px) {
    width: 12rem;
    left: 4rem;
  }

  @media (max-width: 712px) {
    width: 9rem;
    left: -2rem;
  }

  @media (max-width: 480px) {
    width: 7rem;
    left: -2rem;
  }


`

export const GoToMessagePage = styled(Link)`
  margin-bottom: 3rem;
  cursor: pointer;

  display: inline-block;
  text-align: center;

  font-family: 'Avenir Book', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;

  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};

  padding: 0.5rem 3rem;
  border: 1px solid ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};

  &:hover{
    filter: brightness(0.8);
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;

  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  margin-left: 22rem;

  @media (width <= 1200px){
    margin-left: 18rem;
  }
  
  @media (width <= 960px){
    margin-left: 15rem;
  }

  @media (width <= 712px){
    margin-left: 7rem;
  }

  @media (width <= 376px){
    margin-left: 5.5rem;
  }

  
`



export const Text = styled.div`

> a{
    
  }

  > p {
    color: white;

    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  p:last-child{
    margin-top: 3rem;
  }

  @media (width <= 960px){
    > a, p {
      font-size: 1rem;
    }

    > a {
      padding: 0.5rem 2rem;
    }
  }

  @media (width <= 376px){

    > a {
      padding: 0.5rem 0.75rem;
    }
  }
`

export const Signature = styled.div`
  display: flex;
  justify-content: end;

  .signature-image{
    width: 25rem;
    height: 10rem;
    margin-top: 1rem;

    @media (width <= 960px){
      width: 22.5rem;
      height: 9rem;
    }

    @media (width <= 712px){
      width: 14rem;
      height: 6rem;
    }

    @media (width <= 376px){
      width: 10rem;
      height: 4rem;
    }
  }
  
`

export const ScrollToTopLink = styled.a`
  margin-top: 3rem;

    font-size: 1rem;
    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
    
    text-decoration: none;
    text-transform: uppercase;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (width <= 960px){
      
      > svg {
        width: 1rem;
        height: 1rem;
      }

      font-size: 0.75rem;
    }
`
