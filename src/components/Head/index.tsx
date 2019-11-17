import React from 'react';
import Typist from 'react-typist';

import { Container, Avatar, Box } from './styles';

import selfie2 from 'assets/selfie-2.jpg';
import 'react-typist/dist/Typist.css';

export default function Head() {
  return (
    <Container>
      <Avatar src={selfie2} size={200} alt="avatar photo" />

      <Box>
        <Typist avgTypingDelay={50} startDelay={1500}>
          <span>Hi, I'm Rômulo Rocha.</span>
          <br></br>
          <span>Fullstack developer</span>
          <Typist.Backspace count={9} delay={500} />
          <span>Developer</span>
        </Typist>
      </Box>
    </Container>
  );
}
