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
  icon: PropTypes.func.isRequired,
  text: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

Image.defaultProps = {
  text: '',
  size: 36,
  color: 'black',
};
