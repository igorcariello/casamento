import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};

  > h3 {
    text-transform: uppercase;
    color: white;
    margin-bottom: 3rem;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  > p,a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: white;
    text-align: center;
    letter-spacing: 30%;
    font-size:1.2rem;
  }
  
  > a {
    margin-top: 0.5rem;
    cursor: pointer;

    &:hover{
      filter: brightness(0.8);
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;

    }
  }
`