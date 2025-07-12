import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;
  padding: clamp(1rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  text-align: center;
`;

export const Buttons = styled.footer`
  width: 100%;
  max-width: 62.5rem;
  display: flex;
  justify-content: center;
`;

export const TotalCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 62.5rem;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  th, td {
    padding: clamp(0.5rem, 2vw, 1rem);
    text-align: center;
    font-size: clamp(0.875rem, 2vw, 1rem);
  }

  thead {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  }

  tbody tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
  }

  @media(max-width: 900px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    border-radius: 0;
  }
`;

export const StatusBadge = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GREEN_600};
`;

export const CardList = styled.div`
  display: none;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  strong {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
    font-size: 1.1rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
    font-size: 1.05rem;
  }
`;
