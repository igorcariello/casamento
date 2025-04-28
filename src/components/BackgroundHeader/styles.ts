import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  padding: 2rem 5rem;
  position: relative;

  #background-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: initial;
    z-index: 0;


  }

  #background-vertical {
    display: none;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: initial;
    z-index: 0;
  }

  

  @media (width <= 960px) {
    padding: 2rem 2.5rem;
  }

  @media (width <= 712px) {
    padding: 2rem 1rem;

    #background-header {
      display: none;
    }

    #background-vertical {
      display: block;
    }
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
  z-index: 1;

  > img {
    width: 4rem;
    height: 3rem;

    @media (width < 712px) {
      width: 3rem;
      height: 2rem;
    }

    @media (width < 376px) {
      width: 2rem;
      height: 1.5rem;
    }
  }


  > nav {
    > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;

      li {
        list-style: none;
        text-transform: uppercase;
        
        font-family: 'Avenir Book', sans-serif;
        font-weight: 500;
        font-size: 0.75rem;
        text-align: center;

        
        cursor: pointer;

        @media (width < 712px) {
          font-size: 0.65rem;
        }

        @media (width < 400px) {
          font-size: 0.5rem;
        }
        
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
  margin: 15rem auto;
  position: relative;
  z-index: 1;

  >img {
    width: 30rem;

    @media (width < 712px) {
      width: 25rem;
    }

    @media (width < 400px) {
      width: 20rem;
    }

    @media (width < 340px) {
      width: 15rem;
    }

  }

  .text-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;

    >h2 {
      margin-top: 5rem;
      text-transform: uppercase;
      
      font-family: 'Avenir Book', sans-serif;
      font-weight: 400;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    }

    > p {
      margin-top: 0.75rem;
  
      font-family: 'Avenir Book', sans-serif;
      font-size: 1rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
      text-transform: uppercase;
    }

    @media (width < 400px ) {
      > h2 {
        font-size: 1rem;
      }

      >p {
        font-size: 0.75rem
      }
    }
  }


`