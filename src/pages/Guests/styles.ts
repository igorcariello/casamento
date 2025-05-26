import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  min-height: 100vh;
  padding: 4rem 2rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
`
export const Buttons = styled.footer`
  width: 100%;

  max-width: 62.5rem;
  display: flex;
  justify-content: space-between;

`
export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  font-weight: 600;

  @media(width < 560px) {
    width: 100%;
  }

`


export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  font-size: 2.5rem;
  text-align: center;
`

export const TotalCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-weight: bold;
`

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

  tbody tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

    cursor: default;
    &:hover {
      filter: brightness(0.9);
    }
  }


  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
    cursor: default;
    
    &:hover {
      filter: brightness(0.9);
    }
  }

  

  tfoot td {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
    font-weight: bold;
  }
`

export const Actions = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UnconfirmButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`

export const CardList = styled.div`
  display: none;

  @media( width <= 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
  }

`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: relative;

  strong {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  }

  span {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    align-self: flex-end;
  }
`



