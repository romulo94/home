import React from 'react';
import { DiNodejsSmall, DiReact } from 'react-icons/di';

import { Container, Box } from './styles';

import colors from 'styles/colors';

export default function Stack() {
  return (
    <Container>
      <Box>
        <DiReact color="#61dafb" size={72} />
        <span>ReactJs</span>
      </Box>
      <Box>
        <DiNodejsSmall color="#3c873a" size={72} />
        <span>Node.js</span>
      </Box>
      <Box>
        <DiReact color="#61dafb" size={72} />
        <span>React Native</span>
      </Box>
    </Container>
  );
}
