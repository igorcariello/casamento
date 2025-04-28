import styled from "styled-components";
import imageFlor2 from "../../assets/florteste.png";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 10rem 0 0;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_7};


  @media (width <= 960px) {
    padding: 5rem 0 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: space-between;

  

`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  width: 60%;
  margin: 0 auto;
  > h3 {
    text-transform: uppercase;
    text-align: center;

    font-family: 'Avenir Book', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    font-weight: 500;
    font-size: 1.5rem  
  }

  > p,a {
    font-family: 'Avenir Book', sans-serif;
    text-align: center;
    font-size: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  p:nth-child(2) {

    margin-top: 3rem;
  }


  > a{
    margin-top: 3rem;
    cursor: pointer;

    padding: 0.5rem 3rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_8};

    &:hover{
      filter: brightness(0.4);
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;

    }
  }

  @media (width <= 960px) {
    width: 80%;
  
  }


`

export const Image = styled.div`
  width: auto;
  height: 20rem;
  
  background-image: url(${imageFlor2});
  background-repeat: repeat;
  background-size: auto;
  background-position: center;

`