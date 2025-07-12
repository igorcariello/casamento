import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;
  padding: 2rem clamp(1rem, 5vw, 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-bottom: 2rem;
    width: 100%;
    max-width: 80rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 2rem;
`;

export const MessagesWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MessageCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;

  height: 300px;
  overflow-y: auto;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const MessageHeader = styled.h3`
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const MessageContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
  white-space: pre-wrap;
  word-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
  font-size: 1.3rem;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const BackToHome = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  gap: 0.5rem;

  padding-left: 5rem;

  @media (max-width: 425px) {
    justify-content: center;
    padding-left: 0;
  }

  svg {
    font-size: 1.2rem;
  }
`;
