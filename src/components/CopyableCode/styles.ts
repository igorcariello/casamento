import styled from "styled-components";

export const CopyContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;


`;

export const CodeBox = styled.pre`
  background-color: #f4f4f4;
  border-radius: 6px;
  padding: 1rem;
  font-family: monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  flex: 1;
  user-select: text;
  white-space: nowrap;
  max-height: 6rem;
`;

export const CopyButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #43a047; 
  }
`;
