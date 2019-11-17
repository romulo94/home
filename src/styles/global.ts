import { createGlobalStyle } from 'styled-components';
import Color from './colors';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Fira Code', sans-serif;
    font-weight: lighter;
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
    overflow-x: hidden;
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

  h2{
    color: ${Color.white}
  }
  h3{
    color: ${Color.lighter}
  }
  p, h4{
    color: ${Color.primary}
  }
  span, li, a {
    color: ${Color.secundary};
  }

  svg, img{
    user-select: none;
  }
`;
