import React from 'react';
import { DiNodejsSmall, DiReact } from 'react-icons/di';
import 'react-typist/dist/Typist.css';
import Typist from 'react-typist';
import avatar from '~/assets/avatar.svg';
import ImageStack from '~/components/ImageStack';
import {
  Container,
  Avatar,
  Stack,
  ContainerHeader,
  Description,
} from './styles';

export default function Main() {
  return (
    <Container>
      <ContainerHeader>
        <Typist avgTypingDelay={50}>
          <span>Desenvolvedor fullstack</span>
          <Typist.Backspace count={9} delay={500} />
          <span> Fullstack </span>
        </Typist>
        <p>
          {/* Sou apaixa programação, atualmente focado em
          JavaScript. NodeJS, ReactJS e React Native. */}
        </p>
      </ContainerHeader>
      <Avatar src={avatar} alt="avatar" size={150} />
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
      </Stack>
      <Description>
        Sou Rômulo, desenvolvedor fullstack há mais de 2 anos. Sou um verdadeiro
        amante de JavaScript e em todo ecossistema ao redor. Trabalho com as
        principais tecnologias do mercado: NodeJs, ReactJs e React Native, atuei
        em startups, empresas e alguns freelas. Tenho algumas aventuras com AWS,
        Docker, Heroku e Netlify.
      </Description>
    </Container>
  );
}
