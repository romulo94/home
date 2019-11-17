import React from 'react';
import { DiNodejsSmall, DiReact } from 'react-icons/di';

import { Container } from './styles';

import colors from 'styles/colors';

export default function Overview() {
  return (
    <Container>
      <p>
        Sou desenvolvedor fullstack há 2 anos e meio. Sou um verdadeiro amante
        de JavaScript e do ecossistema ao redor. Trabalho com as principais
        tecnologias do mercado: <strong>NodeJs</strong>,{' '}
        <strong>ReactJs</strong> e <strong>React Native</strong>, atuei em
        startups, empresas e alguns freelas. Tenho algumas aventuras com AWS,
        Docker, Heroku e Netlify.
      </p>
    </Container>
  );
}
