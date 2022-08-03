import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    display: block;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primary};
    position: relative;
    text-transform: uppercase;
    font-weight: 600;

    &:hover::after {
      left: 25%;
      width: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secundary};
      transition: all 0.3s ease-in-out;
    }
  `}
`;
