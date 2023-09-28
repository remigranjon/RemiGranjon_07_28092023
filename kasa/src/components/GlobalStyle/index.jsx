import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif;
  }
  
  body {
    margin: 0;

  }

  p, h1 {
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
