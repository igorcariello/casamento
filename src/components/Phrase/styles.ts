import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: lightgreen;

  display: grid;
  grid-template-rows: auto 2fr;

  > p {
    width: 50%;
    margin: 15rem auto 5rem;
    text-align: center;
  }
  > img {
    background-color: lightcoral;
    height: 15rem;
    margin: 0 auto;
  }
`