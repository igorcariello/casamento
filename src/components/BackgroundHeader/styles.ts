import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: blueviolet;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: space-between;
  align-items: center;

  > nav {
    background-color: aliceblue;
    > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        list-style: none;
        text-transform: uppercase;
      }
    }
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem;

  >h2 {
    margin-top: 5rem;
  }
  > p {
    margin-top: 2rem
  }

`