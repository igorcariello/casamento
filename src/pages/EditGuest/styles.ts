import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 10vw, 4rem);

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  }

  input {
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_6};
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};

    &:focus {
      border-color: ${({ theme }) => theme.COLORS.PURPLE_500};
      box-shadow: 0 0 0 3px rgba(125, 91, 166, 0.2);
      outline: none;
    }
  }

  span {
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.COLORS.RED_500};
    font-size: 0.875rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.GREEN_600};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  font-weight: 600;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s, transform 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GREEN_100};
    color: ${({ theme }) => theme.COLORS.GREEN_600};
    transform: scale(1.02);
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const ButtonBack = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.ORANGE_500};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.ORANGE_700};
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  }
`;
