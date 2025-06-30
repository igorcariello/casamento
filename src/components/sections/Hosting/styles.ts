import styled from "styled-components";

export const Container = styled.section`
  width:100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: clamp(2rem, 5vw, 20rem);
  padding-bottom: clamp(2rem, 5vw, 20rem);
  padding-left: clamp(0.5rem, 10vw, 50rem);
  padding-right: clamp(0.5rem, 10vw, 50rem);
  
  
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

  max-width: 62.5rem;
  margin: 0 auto;

  width: fit-content;
  
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
  gap: 15rem;

  @media (width <= 960px) {
    gap: 5rem;
  }

  @media (width < 712px) {
    flex-direction: column;
    gap: 3rem;
  }
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

  > h4 {

    a {
      color: white;
      text-decoration: underline;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  > p {
    margin-top: 1rem;
  }


`