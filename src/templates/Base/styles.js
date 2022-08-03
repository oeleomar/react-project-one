import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 5.4rem;

    @media ${theme.media.lessMedium} {
      padding-top: 0;
    }
  `}
`;
