import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Image({ icon: Icon, size, color, link }) {
  return (
    <Container href={link} color={color} link={link} target="blank">
      <Icon size={size} />
    </Container>
  );
}

Image.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  size: PropTypes.number,
  link: PropTypes.number.isRequired,
};

Image.defaultProps = {
  size: 36,
};
