import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;
  padding: 2rem clamp(0.5rem, 10vw, 50rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  font-size: 2.5rem;
  text-align: center;
`;

export const TotalCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-weight: bold;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 62.5rem;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  @media(width <= 768px) {
    display: none;
  }

  th, td {
    padding: 1rem;
    text-align: center;
  }

  thead {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const UnconfirmButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 0.9rem;
  font-weight: 600;

  transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  &:active {
    background-color: ${({ theme }) => theme.COLORS.RED_500};
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  }

  svg {
    pointer-events: none;
  }
`;

export const QRCodeButton = styled(Link)`
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 0.9rem;
  font-weight: 600;

  transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_7};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  &:active {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  }
`;

export const CardList = styled.div`
  display: none;

  @media( width <= 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonPDF = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
  color: white;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_7};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  &:active {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6};
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  }

  @media(width < 560px) {
    width: 100%;
  }
`;

export const Buttons = styled.footer`
  width: 100%;
  max-width: 62.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
