import styled from "styled-components";
import biaeiago1 from "../../assets/biaeiago1.jpg";
import biaeiago2 from "../../assets/biaeiago2.jpg";
import biaeiago3 from "../../assets/biaeiago3.jpg";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 10rem 10rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};

  display: grid;
  grid-template-columns: auto 3fr;
  align-items: flex-start;
  gap: 8rem;

`

export const Imagens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  

  #biaeiago1 {
    width: 12rem;
    height: 15rem;
    background-image: url(${biaeiago1});
    background-size: cover;
    background-position: center;
  }

  #biaeiago2 {
    width: 12rem;
    height: 15rem;
    background-image: url(${biaeiago2});
    background-size: cover;
  }

  #biaeiago3 {
    width: 12rem;
    height: 15rem;
    background-image: url(${biaeiago3});
    background-size: cover;
    background-position: center;
  }
 

`



export const Content = styled.div`
  margin: 0 auto;

  > p {
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    text-indent: 1.5rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  p + p {
    margin-top: 2rem;
  }
`