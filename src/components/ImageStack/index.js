import React from 'react';

import { Container } from './styles';

export default function ImageStack({ icon: Image, text, ...rest }) {
  return (
    <Container>
      <Image {...rest} />
      <span>{text}</span>
    </Container>
  );
}
