import styled from "styled-components";
import biaeiago1 from "../../assets/biaeiago1.jpg";
import biaeiago2 from "../../assets/biaeiago2.jpg";
import biaeiago3 from "../../assets/biaeiago3.jpg";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: gray;

  display: grid;
  grid-template-columns: auto 2fr;
  align-items: center;

`

export const Imagens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > img{
    width: 15rem;
    height: 12rem;
  }
  
  #biaeiago1 {
    width: 10rem;
    height: 13rem;
    background-image: url(${biaeiago1});
    background-size: cover;
    background-position: center;
  }

  #biaeiago2 {
    width: 10rem;
    height: 13rem;
    background-image: url(${biaeiago2});
    background-size: cover;
  }

  #biaeiago3 {
    width: 10rem;
    height: 13rem;
    background-image: url(${biaeiago3});
    background-size: cover;
    background-position: center;
  }
 

`



export const Content = styled.div`
  width: 50%;
  margin: 0 auto;

  p + p {
    margin-top: 1rem;
  }
`