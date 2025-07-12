import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
    font-size: 2rem;
  }

  > a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    font-weight: 600;
    text-decoration: underline;
    margin-top: 1rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
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

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_9};
    }

    &:focus {
      border-color: ${({ theme }) => theme.COLORS.PURPLE_500};
      box-shadow: 0 0 0 3px rgba(125, 91, 166, 0.2);
      outline: none;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.RED_500};
    font-size: 0.875rem;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
