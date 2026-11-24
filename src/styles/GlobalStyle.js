import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, p, dl, dd { margin: 0; }
  img { display: block; max-width: 100%; }
  button, input { font: inherit; }
  p { text-wrap: pretty; }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.lime};
    outline-offset: 3px;
  }
`;
