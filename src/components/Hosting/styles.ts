import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height: auto;
  min-height: 100vh;

  padding: 5rem 20rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;

  h3, p, h4 {
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-weight: 400;
  }
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