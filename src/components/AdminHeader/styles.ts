import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  max-width: 62.5rem;
`

export const Menu = styled.nav`

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  }

  li div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  li div ul a {
    text-decoration: underline;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  }

  li ul button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  }
`