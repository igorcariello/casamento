import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  padding-top: clamp(2rem, 5vw, 2rem);
  padding-bottom: clamp(2rem, 5vw, 2rem);
  padding-left: clamp(0.5rem, 10vw, 50rem);
  padding-right: clamp(0.5rem, 10vw, 50rem);

  position: relative;

  #background-horizontal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: fill;
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


  @media (width <= 712px) {
    padding-top: 5rem;
    
    #background-header {
      display: none;
    }

    #background-vertical {
      display: block;
    }
  }
`

export const ContentWrapper = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;

  z-index: 1;

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