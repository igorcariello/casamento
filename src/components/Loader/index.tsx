import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #ccc;
  border-top-color: #444c35;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 50px auto;
`;

export function Loader() {
  return <Spinner />;
}
