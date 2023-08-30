import { createGlobalStyle } from 'styled-components';

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
