import React from 'react';
import { Line } from 'rc-progress';

import { Container } from './styles';

export default function Skill() {
  return (
    <Container>
      <Line percent="80" strokeWidth="6" strokeColor="white" />
    </Container>
  );
}
