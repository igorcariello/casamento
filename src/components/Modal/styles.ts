import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

export const Message = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #6B46C1;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #553C9A;
  }
`;
