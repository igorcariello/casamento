import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: transparent;

  padding: 2rem 5rem;
  position: relative;

  video {
    background-color: black;
  }

  #background-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    inset: 0;
    object-fit: cover;
    z-index: 0;

  }
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: space-between;

  position: relative;
  overflow: hidden;
  height: 100%;
  z-index: 1;

  > img {
    width: 4rem;
    height: 3rem;
  }


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
        
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
        }

        &:hover {
          filter: brightness(2.5);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem;
  position: relative;
  z-index: 1;

  >img {
    width: 30rem;

  }

  .text-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;

    >h2 {
      margin-top: 5rem;
      text-transform: uppercase;
      
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    }

    > p {
      margin-top: 0.75rem;
  
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
      text-transform: uppercase;
    }
  }


`