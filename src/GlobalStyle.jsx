import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    /* Color */
    --color-white: #ffffff;
    --color-light-white: #eeeeee;
    --color-dark-white: #bdbdbd;
    --color-pink: #fe918d;
    --color-dark-pink: #ff6863;
    --color-dark-grey: #4d4d4d;
    --color-grey: #616161;
    --color-light-grey: #7c7979;
    --color-blue: #1D73DF;;
    --color-dark-blue: #4263a1;
    --color-realdark-blue: #2340c2;
    --color-yellow: #fff7d1;
    --color-orange: #feb546;
    --color-black: #000000;
    /* Font size */
    --font-large: 1.8rem;
    --font-medium: 1.6rem;
    --font-regular: 1.4rem;
    --font-small: 1.2rem;
    --font-micro: 1rem;
    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;
    /* Animation */
    --animation-duration: 300ms;
    /* size */
    --size-border-radius: 4px;
}

  body {
    /* 다운 받아야 함 */
    font-family: "Apple SD Gothic Neo";
    line-height: 1.5;
  }
`;

export default GlobalStyle;
