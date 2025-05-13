import styled from "styled-components";
import home1 from "../../../assets/home1.jpeg";
import home2 from "../../../assets/home2.jpeg";
import home3 from "../../../assets/home3.jpeg";
import home4 from "../../../assets/home4.jpeg";
import home5 from "../../../assets/home5.jpeg";
import home6 from "../../../assets/home6.jpg";
import home7 from "../../../assets/home7.jpg";
import home8 from "../../../assets/home8.jpg";
import home9 from "../../../assets/home9.jpeg";

export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  
  padding-top: clamp(2rem, 5vw, 20rem);
  padding-bottom: clamp(2rem, 5vw, 20rem);
  padding-left: clamp(0.5rem, 10vw, 50rem);
  padding-right: clamp(0.5rem, 10vw, 50rem);

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

`

export const Imagens = styled.div`
  max-width: 62.5rem;
  margin: 2rem auto 0;

  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem 6rem;
  
  
  
  #home1 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home1});
    background-size: cover;
    background-position: center;
  }

  #home2 {
    border-radius: 4px;    
    width: 16rem;
    height: 20rem;
    background-image: url(${home2});
    background-size: cover;
  }

  #home3 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home3});
    background-size: cover;
    background-position: center;
  }
 
  #home4 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home4});
    background-size: cover;
    background-position: center;
  }

  #home5 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home5});
    background-size: cover;
    background-position: center;
  }

  #home6 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home6});
    background-size: cover;
    background-position: center;
  }

  #home7 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home7});
    background-size: cover;
    background-position: center;
  }

  #home8 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home8});
    background-size: cover;
    background-position: center;
  }

  #home9 {
    border-radius: 4px;
    width: 16rem;
    height: 20rem;
    background-image: url(${home9});
    background-size: cover;
    background-position: center;
  }

  @media (width <= 712px) {
    display:none;
  }
`



export const Content = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;

  > p {
    font-size: 1.5rem;
    font-family: 'Avenir Book', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  p + p {
    margin-top: 2rem;
  }

  @media (width <= 960px) {
    > p  {
      font-size: 1.2rem;
    }
  }
`