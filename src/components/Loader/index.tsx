import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh; /* ajuste conforme sua página */
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.COLORS.BACKGROUND_4 || "#ccc"};
  border-top-color: ${({ theme }) => theme.COLORS.BACKGROUND_6 || "#444c35"};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export function Loader() {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}
