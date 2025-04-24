import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  
  padding: 5rem 3rem 5rem 5rem;

  display: flex;
  position: relative;
  
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  
  > img {
    width: 20rem;
    height: 16rem;
  
    top: 5rem;
    left: 5rem;
    position: absolute;
  
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 25rem;
`



export const Text = styled.div`

> a{
    margin-bottom: 3rem;
    cursor: pointer;

    display: inline-block;

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
`

export const Signature = styled.div`
  display: flex;
  justify-content: end;

  .signature-image{
    width: 25rem;
    height: 10rem;
    margin-top: 1rem;
  }
  
`

export const BackTop = styled.div`
  margin-top: 3rem;

  > a {
      font-size: 1.2rem;
      font-family: 'Avenir Book', sans-serif;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
      
      text-decoration: none;
      text-transform: uppercase;
      
      display: flex;
      flex-direction: column;
      align-items: center;


    }

`