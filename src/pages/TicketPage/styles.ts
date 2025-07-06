import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 300px;
    width: 100%;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }
`;

export const DownloadButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GREEN_600};
  color: white;
  border: none;
  padding: 0.9rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GREEN_600};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
