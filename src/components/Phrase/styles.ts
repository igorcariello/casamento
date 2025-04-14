import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  padding: 2rem 5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  display: grid;
  grid-template-rows: auto 2fr;

  > div {
    margin: 5rem auto;

    > p {
      text-align: center;
  
      font-size: 1.25rem;
      font-family: 'Montserrat', sans-serif;
    }
    
    p + p {
      margin-top: 1.5rem;
    }
  }

  > img {
    height: 15rem;
    margin: 0 auto;
  }
`