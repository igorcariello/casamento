import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
    font-family: 'Avenir Book';
    src: 
        url('/fonts/AvenirLTPro-Book.woff2') format('woff2'),
        url('/public/fonts/AvenirLTPro-Book.woff') format('woff'); 
    font-weight: normal;
    font-style: normal; 
    font-display: swap; 
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  }

  :root {
    font-family: 'Avenir Book', sans-serif;
    font-size: 16px;
  }

  body, input, button, textarea {
    font-family: 'Avenir Book', sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }




`