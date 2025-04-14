import styled from "styled-components";
import signature from '../../assets/beatrizeiagobranco.png'

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  padding: 3rem 7rem 5rem 4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_9};

  >div {
    display: flex;
    align-items: center;
    gap: 3rem;

    > img {
      width: 20rem;
      height: 16rem;
  
    }
  }

  
  
  `
export const Signature = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 35rem;

  > div {
    background: url(${signature}) no-repeat center;
    background-size: 15rem 10rem;
    width: 15rem;
    height: 10rem;
  }
`



export const Content = styled.div`

  > h3 {
    text-transform: uppercase;
    color: white;

    font-family: 'Montserrat', sans-serif;
    font-weight: 500;

    margin-bottom: 3rem;
  }

  > p {
    color: white;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
  }

  p:last-child{
    margin-top: 3rem;
  }
`