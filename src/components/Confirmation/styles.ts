import styled from "styled-components";
import imageFlor2 from "../../assets/florteste.png";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_7};

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: end;

`
export const Content = styled.div`
  margin: 10rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  > h3 {
    text-transform: uppercase;

    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    font-weight: 500;
  }

  > p,a {
    font-family: 'Montserrat', sans-serif;

    font-size: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  > a{
    
    cursor: pointer;

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
  background-color: aliceblue;
  
  #flores {
    background-image: url(${imageFlor2});
    background-repeat: repeat;
    background-size: auto;
    background-position: center;
    height: 100%;
  }
  
`