import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0; 
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Container = styled.div`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 8px;
  max-width: 90vw;
  width: 400px;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  text-align: center;

  @media (max-width: 480px) {
    width: 90vw;
    padding: 1.5rem 1.8rem;
  }
`;

export const MessageText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.8rem;
  color: #333;
  word-wrap: break-word;
`;

export const CloseButton = styled.button`
  background-color: #6a0dad;
  color: white;
  border: none;
  padding: 0.65rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.25s ease;

  &:hover,
  &:focus {
    background-color: #570ca0;
  }

  &:focus {
    outline: 3px solid #b28bff;
    outline-offset: 2px;
  }
`;
