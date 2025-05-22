import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  min-height: 100vh;

  h1 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }


`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  max-width: 62.5rem;


  > a {
    position: absolute;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_8};
  }
`
export const MessagesWrapper = styled.div`
  width: 100%;
  max-width: 62.5rem;
  
  display: flex;
  gap: 1.5rem;
  padding: 1rem;

  flex-wrap: wrap;

`
export const MessageCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  flex: 1;

  min-width: 20rem;
  height: 20rem;

  overflow: auto;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`

export const MessageHeader = styled.h3`
  margin: 0 0 1rem 0;
  font-family: 'Avenir Book', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
`;

export const MessageContent = styled.p`
  margin: 0;
  font-family: 'Avenir Book', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
  white-space: pre-wrap;
`;