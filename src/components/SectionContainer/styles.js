import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;

    @media ${theme.media.lessMedium} {
      max-width: 100%;
      overflow-y: hidden;
    }
  `}
`;
