import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    ${background && darkBackground(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

const darkBackground = (theme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;
