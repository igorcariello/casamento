import styled from "styled-components";
import imageFlor2 from "../../assets/flor2.png";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_5};


  padding: 10rem 0;

  @media (width <= 960px) {
    padding: 5rem 0;
  }
  `
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  
  margin: 0 auto;
  width: 60%;

  @media (width <= 960px) {
    width: 80%;
  }
`

export const DressCode = styled.div`
  width: 100%;
  > h3 {
    text-transform: uppercase;
    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;

    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  > p {
    font-family: 'Avenir Book', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    margin-top: 0.75rem;
    font-weight: 400;
    font-size: 1.2rem;

  }

  @media (width <= 960px){
    > h3 {
      font-size: 1.2rem;
    }
    
    > p {
      font-size: 1rem
    }
  }

`
export const Transport = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > h3 {
    text-transform: uppercase;
    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;

    margin-bottom: 1.5rem; 
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  > p {
    font-family: 'Avenir Book', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
      
    font-size: 1.2rem;
    font-weight: 400;
  }

  p + p {
    margin-top: 0.75rem;
  }

  
  @media (width <= 960px){
    > h3 {
      font-size: 1.2rem;
    }
    
    > p {
      font-size: 1rem
    }
  }
`

export const Image = styled.div`
  background-image: url(${imageFlor2});
  background-size: contain ;
  background-position: center;
  background-repeat: no-repeat;
  width: 15rem;
  height: 15rem;

`