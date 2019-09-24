import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Image({ icon: Icon, text, size, ...rest }) {
  return (
    <Container size={size}>
      <Icon />
      <span>{text}</span>
    </Container>
  );
}

// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   text: PropTypes.string,
// };

// Image.defaultProps = {
//   text: '',
// };
