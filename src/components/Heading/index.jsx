import * as styled from './styles';
import P from 'prop-types';

export const Heading = ({
  children,
  darkFont = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <styled.Title as={as} darkFont={darkFont} size={size} uppercase={uppercase}>
      {children}
    </styled.Title>
  );
};

Heading.propTypes = {
  children: P.node,
  darkFont: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'large', 'huge']),
  uppercase: P.bool,
};
