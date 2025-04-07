import styled from "styled-components";
import imageFlor2 from "../../assets/florteste.png";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: crimson;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: end;

`
export const Content = styled.div`
  margin: 10rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

`

export const Image = styled.div`
  width: auto;
  height: 20rem;
  background-color: aliceblue;
  
  #flores {
    background-image: url(${imageFlor2});
    background-repeat: repeat;
    background-size: auto;
    background-position: center;
    height: 100%;
  }
  
`