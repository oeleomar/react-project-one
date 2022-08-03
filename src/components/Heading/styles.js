import styled, { css } from 'styled-components';

export const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  ${({ theme, darkFont, size, uppercase }) => css`
    color: ${darkFont ? theme.colors.primary : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  large: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lessMedium} {
    font-size: ${theme.fonts.sizes.large};
  }
`;
