import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { toCSSVariables } from './theme';

export const GlobalStyle = createGlobalStyle`
  :root {
    ${(props) => props.theme}
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    /* 다운 받아야 함 */
    font-family: "Apple SD Gothic Neo";
    line-height: 1.5;
  }
`;

export default GlobalStyle;
