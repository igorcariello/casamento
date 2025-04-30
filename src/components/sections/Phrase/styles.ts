import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;

  padding: 2rem;

  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: grid;
    grid-template-rows: auto 2fr;
    margin-bottom: 3rem;
    
    > img {
      height: 15rem;
      margin: 0 auto;

    }
  }

`

export const Content = styled.div`
  margin: 5rem auto;

> p {
  text-align: center;

  font-size: 1.5rem;
  font-family: 'Avenir Book', sans-serif;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};

}

@media (width <= 960px){
  
    > p {
      font-size: 1.2rem
    }
  }


`