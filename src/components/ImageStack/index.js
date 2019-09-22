import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ImageStack({ icon: Image, text, ...rest }) {
  return (
    <Container>
      <Image {...rest} />
      <span>{text}</span>
    </Container>
  );
}

ImageStack.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string,
};

ImageStack.defaultProps = {
  text: '',
};
