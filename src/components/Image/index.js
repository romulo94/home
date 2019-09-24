import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Image({ icon: Icon, text, size, color }) {
  return (
    <Container size={size}>
      <Icon size={size} fill={color} />
      <span>{text}</span>
    </Container>
  );
}

Image.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string,
  size: PropTypes.number,
};

Image.defaultProps = {
  text: '',
  size: 36,
};
