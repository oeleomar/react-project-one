import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem
    font-family: ${theme.fonts.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.family.secondary};
    font-weight: 900;
    margin: ${theme.spacings.large} 0;
  }

  p {
    margin: ${theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${theme.colors.secundary};
  }

  .table {
    width: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
