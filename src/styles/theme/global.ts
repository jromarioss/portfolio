import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-100"]};
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2 {
    line-height: 1.6;
  }

  ul, li, a {
    list-style: none;
    text-decoration: none;
    color: ${props => props.theme["gray-100"]};
  }
`;