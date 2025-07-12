import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  a {
    padding: 0.75rem 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
    border-radius: 4px;
    font-weight: 600;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;