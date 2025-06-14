import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;

  padding-top: clamp(2rem, 5vw, 4rem);
  padding-bottom: clamp(2rem, 5vw, 4rem);
  padding-left: clamp(0.5rem, 10vw, 50rem);
  padding-right: clamp(0.5rem, 10vw, 50rem);
  
  display: flex;
  flex-direction: column;
  align-items: center;

  >div:first-child {
    margin-bottom: 2rem;
    width: 100%;
    max-width: 62.5rem;
  }

`
export const BackToHomeLink = styled(RouterLink)`
  color: white;

  display: flex;
  align-items: center;
  
  gap: 0.5rem;
  width: fit-content;
  cursor: pointer;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

`

export const Form = styled.form`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0, 0.8);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;

  label {
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  input {

    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_8};
    border-radius: 8px;

    font-size: 1rem;
    font-weight: 600;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    transition: border-color 0.2s, box-shadow 0.2s;
  
    
    &:focus {
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
    box-shadow: 0 0 0 3px rgba(108, 99,255, 0.2);
    outline: none;
    }

    &::placeholder{
      font-size: 0.9rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_3};

    }

  }

  @media (width <= 960px) {
    width: 80%;
  }

  @media (width <= 712px) {
    width: 100%;
  }

`
export const SuggestionsList = styled.ul`
  list-style: none;
  margin-top: 0.25rem;
  padding: 0 0.25rem 0;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_3};
  border-top: none;
  max-height: 180px;
  overflow-y: auto;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_4};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12);

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_4};
    border-radius: 0 8px 8px 0; /* Arredonda o canto da track */
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_3};
    border-radius: 4px;
    &:hover {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_8}; /* Cor mais escura no hover do thumb */
    }
  }
`;

export const SuggestionItem = styled.li`
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8 || '#333'};

  &:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_3 || '#f0f0f0'}; 
    border-radius: 8px;
    margin-bottom: 0.25rem;
  }
`;

export const LoadingText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme, role }) => role === 'alert' ? 'red' : (theme.COLORS.BACKGROUND_3 || '#555')};
  margin-top: 0.25rem;
  min-height: 1.2em;
`;



export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
  color: white;

  font-weight: 600;
  font-size: 1rem;

  border: none;
  border-radius: 8px;

  width: 30%;
  align-self: flex-end;

  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover:not(:disabled){
    transform: scale(1.02);
    filter: brightness(1.1);
  }
  
  &:active:not(:disabled){
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (width <= 712px) {
    width: 50%;
  }

  @media (width <= 560px) {
    width: 100%;
    align-self: center;
  }
`