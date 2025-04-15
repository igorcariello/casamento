import styled from "styled-components";
import imageFlor2 from "../../assets/flor2.png";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_5};


  padding: 5rem 20rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export const Content = styled.div`
  display:flex;
  align-items: center;
  gap: 2rem;
`

export const DressCode = styled.div`
  
  > h3 {
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  > p {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    margin-top: 0.75rem;
    font-weight: 400;
    font-size: 1.2rem;

  }

  > p:last-child {
    margin-top: 2rem;
    
  }
`
export const Image = styled.div`
  background-image: url(${imageFlor2});
  background-size: contain ;
  background-position: center;
  background-repeat: no-repeat;
  width: 15rem;
  height: 15rem;

`
export const Transport = styled.div`

  > h3 {
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  > p {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    margin-top: 0.75rem;

    font-size: 1.2rem;
    font-weight: 400;
  }
`