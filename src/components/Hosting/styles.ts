import styled from "styled-components";

export const Container = styled.section`
  width:100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  padding: 10rem 0;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};

  h3, p, h4 {
    font-family: 'Avenir Book', sans-serif;
    color: white;
    font-weight: 400;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 60%;

  margin: 0 auto;

  width: 60%;
`


export const Header = styled.div`
  > h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.2rem;
  }

`

export const Hotels = styled.div`
  display: flex;
  gap: 10rem;
`
export const Group1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;


`

export const Group2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

`


export const Hotel = styled.div`
  > h4, p {
    font-size: 1.2rem;
  }

  > p {
    margin-top: 1rem;
  }

`