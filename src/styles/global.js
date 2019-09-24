import { createGlobalStyle } from 'styled-components';
import backgroung from '~/assets/background.svg';

export default createGlobalStyle`
  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css);
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus {
    outline: 0;
  }

  html {
    background: #191920;
    height: 100vh;
  }

  body, #root {
    background: #191920;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Fira Code', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  a, h2, h3, h4, span, p{
    color: #a4a4a4;
  }

  h1{
    color: #e1e1e1;
  }
`;
