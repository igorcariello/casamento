import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_9};

  padding: 10rem 2rem;

  @media (width <= 960px){
    padding: 5rem 2rem;
  }
  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h3 {
    text-transform: uppercase;
    color: white;
    margin-bottom: 5rem;
    font-size: 1.5rem;
    text-align: center;

    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
  }

  > p,a {
    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    color: white;
    text-align: center;
    letter-spacing: 30%;
    font-size:1.2rem;
  }
  
  > a{
    margin-top:5rem;
    cursor: pointer;

    padding: 0.5rem 3rem;
    border: 1px solid ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};

    &:hover{
      filter: brightness(0.8);
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;

    }
  }


`