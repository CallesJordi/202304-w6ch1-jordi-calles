import { createGlobalStyle } from "styled-components";

import "@fontsource/rajdhani";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button,
  input {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  button {
    cursor: pointer;
    font:inherit;
    border-style: none;
  }

  img {
    max-width:100%;
  }

`;

export default GlobalStyle;
