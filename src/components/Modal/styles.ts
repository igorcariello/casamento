import styled from "styled-components";

export const ModalContainer = styled.div`
  background: white;
  padding: 1.8rem 2.4rem;
  border-radius: 8px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.15);
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.4rem;
  white-space: pre-line; 
`;

export const CloseButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: #6f46c7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  min-width: 80px;

  &:hover,
  &:focus {
    background: #5936a6;
    outline: none;
  }
`;