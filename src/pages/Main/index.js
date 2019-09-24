import React from 'react';
import { DiNodejsSmall, DiReact } from 'react-icons/di';
import { Line } from 'rc-progress';
import 'react-typist/dist/Typist.css';
import Typist from 'react-typist';
import avatar from '~/assets/avatar.svg';
import selfie1 from '~/assets/selfie-1.jpg';
import selfie2 from '~/assets/selfie-2.jpg';
import webfront from '~/assets/web-front.svg';
import ImageStack from '~/components/ImageStack';
import Image from '~/components/Image';
import {
  Container,
  Name,
  Avatar,
  Stack,
  ContainerHeader,
  ContainerDescription,
  Description,
} from './styles';

export default function Main() {
  return (
    <Container>
      <ContainerHeader>
        <Avatar src={selfie2} alt="avatar" size={200} />
        <div>
          <Name>Oi, sou Rômulo Rocha.</Name>
          <Typist avgTypingDelay={50}>
            <span>Desenvolvedor fullstack</span>
            <Typist.Backspace count={9} delay={500} />
            <span> Fullstack </span>
          </Typist>
        </div>
        <div>
          <Image icon={webfront} size={36} />
        </div>
      </ContainerHeader>

      <Stack>
        <ImageStack
          icon={DiNodejsSmall}
          text="NodeJs"
          color="#3c873a"
          size={72}
        />
        <ImageStack icon={DiReact} text="ReactJS" color="#61dafb" size={72} />
        <ImageStack
          icon={DiReact}
          text="React Native"
          color="#61dafb"
          size={72}
        />
      </Stack>

      <ContainerDescription>
        <Description>
          <p>
            Sou desenvolvedor fullstack há mais de 2 anos. Sou um verdadeiro
            amante de JavaScript e do ecossistema ao redor. Trabalho com as
            principais tecnologias do mercado: <strong>NodeJs</strong>,{' '}
            <strong>ReactJs</strong> e <strong>React Native</strong>, atuei em
            startups, empresas e alguns freelas. Tenho algumas aventuras com
            AWS, Docker, Heroku e Netlify.
          </p>
        </Description>
      </ContainerDescription>
      <Line percent="80" strokeWidth="1" strokeColor="#D3D3D3" />
    </Container>
  );
}
