import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;

export const ModalBox = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    margin-bottom: 1rem;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
  }
`;
