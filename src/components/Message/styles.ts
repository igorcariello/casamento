import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  
  padding: 5rem 3rem 5rem 5rem;

  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  
  > img {
    width: 20rem;
    height: 16rem;
  
    top: 5rem;
    left: 10rem;
    position: absolute;
  
  }

  a[href="#navigation"] {
    margin-top: 3rem;

    font-size: 1rem;
    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
    
    text-decoration: none;
    text-transform: uppercase;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (width <= 960px){
      
      > svg {
        width: 1rem;
        height: 1rem;
      }

      font-size: 0.75rem;
    }

  }

  @media (width <= 1200px){

    > img {
      top: 2.5rem;
      left: 2.5rem;
    }
  }
  
  @media (width <= 960px){
    padding: 5rem 3rem;

    > img {
      width: 12rem;
      height: 8rem;

      top: 2.5rem;
      left: 2.5rem;
    }
  }

  @media (width <= 712px){
    > img {
      width: 8rem;
      height: 6rem;

      top: 4rem;
      left: 1rem;}
  }

 


  @media (height > 800px){
    min-height: auto;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 22rem;

  @media (width <= 1200px){
    margin-left: 18rem;
  }
  
  @media (width <= 960px){
    margin-left: 15rem;
  }

  @media (width <= 712px){
    margin-left: 7rem;
  }

  @media (width <= 376px){
    margin-left: 4rem;
  }

  
`



export const Text = styled.div`

> a{
    margin-bottom: 3rem;
    cursor: pointer;

    display: inline-block;
    text-align: center;

    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};

    padding: 0.5rem 3rem;
    border: 1px solid ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};

    &:hover{
      filter: brightness(0.8);
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;

    }
  }

  > p {
    color: white;

    font-family: 'Avenir Book', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  p:last-child{
    margin-top: 3rem;
  }

  @media (width <= 960px){
    > a, p {
      font-size: 1rem;
    }

    > a {
      padding: 0.5rem 2rem;
    }
  }

  @media (width <= 376px){

    > a {
      padding: 0.5rem 0.75rem;
    }
  }
`

export const Signature = styled.div`
  display: flex;
  justify-content: end;

  .signature-image{
    width: 25rem;
    height: 10rem;
    margin-top: 1rem;

    @media (width <= 960px){
      width: 22.5rem;
      height: 9rem;
    }

    @media (width <= 712px){
      width: 14rem;
      height: 6rem;
    }

    @media (width <= 376px){
      width: 10rem;
      height: 4rem;
    }
  }
  
`
