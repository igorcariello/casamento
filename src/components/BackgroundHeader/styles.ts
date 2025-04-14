import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: transparent;

  padding: 2rem 5rem;

  #background-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: -1;
  }
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: space-between;
  align-items: center;

  position: relative;
  overflow: hidden;
  height: 100%;



  > nav {
    > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      li {
        list-style: none;
        text-transform: uppercase;
        
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 0.75rem;

        cursor: pointer;
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
    
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }
  > p {
    margin-top: 0.75rem;

    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
  }

`