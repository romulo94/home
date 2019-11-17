import React from 'react';

import { Container } from './styles';

export default function Overview() {
  return (
    <Container>
      <p>
        Sou desenvolvedor fullstack há 2 anos e meio. Sou um verdadeiro amante
        de JavaScript e do ecossistema ao redor. Trabalho com as principais
        tecnologias do mercado: <strong>NodeJs</strong>,{' '}
        <strong>ReactJs</strong> e <strong>React Native</strong>, atuei em
        startups e empresas, atualmente faço parte da BossaBox como prolancer.
      </p>
      <span>
        De modo geral trabalho e tenho conhecimento sobre: Mongo, Postgres,
        Redis, Express, NextJs, Serverless, Redux, Redux Saga, Typescript, Jest,
        Docker, Docker Compose, Eslint, AWS, NWjs, Travis (CD/CI), Socket.io,
        Swagger, RESTful, Sentry, JWT, traefik, html, css flexbox, scss e entre
        outras ferramentas/libs.{' '}
      </span>{' '}
      <ul>
        <span>Soft skills: Teamwork; Communication; Creativity</span>
      </ul>
    </Container>
  );
}
