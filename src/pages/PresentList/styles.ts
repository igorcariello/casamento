import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  padding-top: clamp(2rem, 5vw, 2rem);
  padding-bottom: clamp(2rem, 5vw, 2rem);
  padding-left: clamp(0.5rem, 10vw, 50rem);
  padding-right: clamp(0.5rem, 10vw, 50rem);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-top: 5rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};

  h1 {
    font-weight: 300;
  }
`;

export const FirstParagraph = styled.div`
  margin-top: 3rem;

  p {
    margin-top: 0.25rem;
  }
`;

export const SecondParagraph = styled.div`
  margin-top: 0.5rem;

  p {
    margin-top: 0.25rem;
  }
`;

export const PresentsWrapper = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 3rem;
  width: 100%;

  @media (max-width: 712px) {
    display: grid;
    grid-template-columns: 15rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  align-items: center;
  text-align: center;
  width: 15rem;
`;

export const Photo = styled.img`
  border-radius: 8px;
  width: 15rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-top: 1rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Price = styled.p`
  margin-top: 1rem;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  > ${Price} {
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  margin-top: auto;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_8};
  padding: 1rem 2rem;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    filter: brightness(1);
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
    border: none;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  }
`;

export const ScrollToTopLink = styled.a`
  margin-top: 3rem;
  font-size: 1rem;
  font-family: 'Avenir Book', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (width <= 960px) {
    > svg {
      width: 1rem;
      height: 1rem;
    }
    font-size: 0.75rem;
  }
`;
