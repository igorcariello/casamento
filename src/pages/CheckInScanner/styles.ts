import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.COLORS.BACKGROUND_2} 0%,
    ${({ theme }) => theme.COLORS.BACKGROUND_4} 100%
  );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(2rem, 5vw, 4rem);
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const ReaderWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  font-size: 1rem;
  margin-top: 1rem;
  line-height: 1.4;
`;
