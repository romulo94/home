import { createGlobalStyle } from 'styled-components';
import Color from './colors';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Fira Code', sans-serif;
  }
  *:focus {
    outline: 0;
  }
  html {
    background: linear-gradient(0deg, ${Color.dark} , ${Color.semiblack} );
    min-height: 100vh;
  }

  body, #root  {
    height: 100%;
  }

  #root{
    display: flex;
    justify-content: center;
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
    color: ${Color.secundary};
  }
`;
