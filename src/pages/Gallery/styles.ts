import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Container = styled.div`

  padding-top: clamp(2rem, 5vw, 2rem);
  padding-bottom: clamp(2rem, 5vw, 2rem);
  padding-left: clamp(0.5rem, 10vw, 50rem);
  padding-right: clamp(0.5rem, 10vw, 50rem);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  `

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;

  width: 100%;
  max-width: 62.5rem;

  >h1 {
    text-transform: uppercase;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    
    margin-bottom: 2rem;
    text-align: center;


    @media(width <= 712px){
      font-size: 1.5rem;
    }

  }
  
  @media(width <= 560px){
    flex-direction: column;
    gap: 1rem;
  }


`
export const BackToHome = styled.a`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};

  left: 0;
  cursor: pointer;

  @media (width <= 712px){
    font-size: 0.75rem;
  }

  @media (width <= 560px){
    position: unset;
  }
`

export const PhotosWrapper = styled.div`
  margin: 0 auto;
  
  column-count: 3;
  column-gap: 1rem;
  width: 100%;
  max-width: 62.5rem;

  @media (width <= 960px) {
    column-count: 2;
  }

  @media (width <= 712px) {
    column-count: 1;
  }
`

export const Photo = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  }
`

export const Root = styled(Dialog.Root)`

  @media (width <= 712px){
    display: none;
  }

`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
`

export const Content = styled(Dialog.Content)`
  border-radius: 8px;
  border: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  outline: none;

  z-index: 600;

  > img {
    max-width: 100%;
    max-height: 100vh;
    object-fit: contain;
    border-radius: 8px;
    border: none;
  }


`

export const Close = styled(Dialog.Close)`
  position: fixed;
  top: 1rem;
  right: 1rem;
  
  background-color: transparent;
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 700;
  
  color: white;
  width: 3rem;
  height: 3rem;

  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }


`