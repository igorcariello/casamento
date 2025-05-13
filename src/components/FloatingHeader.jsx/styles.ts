import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  max-height: fit-content;


  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};

  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-visible="true"] {
    transform: translateY(0);
  }

  > header {
    height: fit-content;
    
    > div {
      max-width: 62.5rem;
      padding-top: 0.5rem;
    }
  }

 @media (width <= 712px) {
    display: none;
  }
`