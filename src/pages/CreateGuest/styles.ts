import styled from "styled-components";


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

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

`

export const Form = styled.form`
  width: 60%;
  max-width: 62.5rem;
  margin: 0 auto;
  min-height: 80vh;

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
  width:100%;

  label {
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }

  input {

    width: 100%;
    padding: 0.5rem 1rem;
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
      font-size: 1rem;

    }

    @media (width <= 712px) {
      width: 100%;
    }
  }

  @media (width <= 960px) {
    width: 80%;
  }

  @media (width <= 712px) {
    width: 100%;
  }

`
export const Buttons = styled.div`
  display: flex;
  gap: 2rem;

`

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
  color: white;
  margin-top: 2rem;

  font-weight: 600;
  font-size: 1rem;

  border: none;
  border-radius: 8px;

  align-self: center;

  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: translateY(0);
  }

  @media (width <= 712px) {
    width: 50%;
  }

  @media (width <= 560px) {
    width: 100%;
  }
`

export const ButtonBack = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  color: white;
  margin-top: 2rem;

  font-weight: 600;
  font-size: 1rem;

  border: none;
  border-radius: 8px;

  align-self: center;

  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: translateY(0);
  }

  @media (width <= 712px) {
    width: 50%;
  }

  @media (width <= 560px) {
    width: 100%;
  }
`