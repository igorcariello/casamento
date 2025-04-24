import styled from "styled-components";
import imageFlor2 from "../../assets/florteste.png";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_7};
  padding: 10rem 0 0;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  min-height: calc(100vh - 10rem);
  height: 100%;

`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  width: 60%;
  margin: 0 auto;
  > h3 {
    text-transform: uppercase;

    font-family: 'Avenir Book', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    font-weight: 500;
  }

  > p,a {
    font-family: 'Avenir Book', sans-serif;

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

`

export const Image = styled.div`
  width: auto;
  height: 20rem;

  
    background-image: url(${imageFlor2});
    background-repeat: repeat;
    background-size: auto;
    background-position: center;

  
  
`