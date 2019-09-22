import React from 'react';
import { DiNodejsSmall, DiReact } from 'react-icons/di';
import 'react-typist/dist/Typist.css';
import Typist from 'react-typist';
import avatar from '~/assets/avatar.svg';
import ImageStack from '~/components/ImageStack';
import { Container, Avatar, Stack } from './styles';

export default function Main() {
  return (
    <Container>
      <Typist avgTypingDelay={50}>
        <span>Desenvolvedor Fullstack</span>
        <Typist.Backspace count={8} delay={500} />
        <span> Phrase </span>
      </Typist>
      <p>
        Sou um verdadeiro amante da área de programação, atualmente focado em
        JavaScript. NodeJS, ReactJS e React Native.
      </p>
      <Stack>
        <ImageStack
          icon={DiNodejsSmall}
          text="NodeJs"
          color="#3c873a"
          size={48}
        />
        <ImageStack icon={DiReact} text="ReactJS" color="#61dafb" size={48} />
        <ImageStack
          icon={DiReact}
          text="React Native"
          color="#61dafb"
          size={48}
        />
        {/* <DiNodejsSmall size={48} color="#3c873a" />
        <DiReact size={48} color="#61dafb" />
        <DiReact size={48} color="#61dafb" /> */}
      </Stack>
      <Avatar src={avatar} alt="avatar" size={150} />
    </Container>
  );
}
