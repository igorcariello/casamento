import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    text-align: center;
    p:nth-child(1) {
      margin-bottom: 2rem;
    }
    p {
      color: white;
      font-size: 1.5rem;
      font-family: 'Montserrat', sans-serif;
    }
  }
`

