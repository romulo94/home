import React from 'react';
import { DiNodejsSmall, DiReact } from 'react-icons/di';
import { Line } from 'rc-progress';
import 'react-typist/dist/Typist.css';
import Typist from 'react-typist';
import avatar from '~/assets/avatar.svg';
import selfie1 from '~/assets/selfie-1.jpg';
import selfie2 from '~/assets/selfie-2.jpg';
import webfront from '~/assets/web-front';
import smartphone from '~/assets/smartphone';
import DatabaseCloud from '~/assets/database-cloud';
import ImageStack from '~/components/ImageStack';
import Image from '~/components/Image';
import {
  Container,
  ContainerHeader,
  Avatar,
  Info,
  ContainerIconSVG,
  Name,
  Stack,
  ContainerDescription,
  Description,
} from './styles';

export default function Main() {
  return (
    <Container>
      <ContainerHeader>
        <Avatar src={selfie2} alt="avatar" size={200} />
        <Info>
          <Name>Oi, sou Rômulo Rocha.</Name>
          <Typist avgTypingDelay={50}>
            <span>Desenvolvedor fullstack</span>
            <Typist.Backspace count={9} delay={500} />
            <span> Fullstack </span>
          </Typist>
        </Info>
        <ContainerIconSVG>
          <Image icon={DatabaseCloud} size={72} color="#aaa" />
          <Image icon={webfront} size={72} color="#aaa" />
          <Image icon={smartphone} size={72} color="#aaa" />
        </ContainerIconSVG>
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
      <Line percent="80" strokeWidth="0.5" strokeColor="#D3D3D3" />
    </Container>
  );
}
