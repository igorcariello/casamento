import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  padding: 2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};

  display: flex;
  justify-content: center;
  align-items: center;

`

export const Content = styled.div`
  text-align: center;
  
  p:nth-child(1) {
    margin-bottom: 2rem;
  }
  p {
    color: white;
    font-size: 1.5rem;
    font-family: 'Avenir Book', sans-serif;
  }

  a {
    display: inline-block;
    border: 1px solid white;
    background-color: transparent;

    padding: 0.5rem 3rem;
    font-family: 'Avenir Book', sans-serif;
    color: white;

    margin-top: 2rem;
    
    cursor: pointer;
    text-decoration: none;

  }

  @media (width <= 960px){
  
  > p {
    font-size: 1.2rem
  }

  > a {
    font-size: 0.75rem;
    padding: 0.5rem 2rem;
  }
}

  

`

