import { createGlobalStyle } from 'styled-components';
import './font.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    ${(props) => props.theme}
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: "Apple SD Gothic Neo";
    line-height: 1.5;
  }
  @font-face {
  font-family: 'Jost';
  src: url("../../public/fonts/") format("ttf");
  }
`;

export default GlobalStyle;
