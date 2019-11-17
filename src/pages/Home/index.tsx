import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';

import selfie2 from 'assets/selfie-2.jpg';
import Backend from 'assets/development.svg';
import Frontend from 'assets/quality.svg';
import Mobile from 'assets/devices.svg';

import {
  Container,
  Head,
  Avatar,
  Box,
  Icon,
  Info,
  Card,
  CardHead,
  Description,
} from './styles';

import 'react-typist/dist/Typist.css';

export default function Home() {
  return (
    <Container>
      <Head>
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
      </Head>

      <Info>
        <h2>What I do as developer:</h2>
        <Card>
          <CardHead>
            <h2>Back-End</h2>
            <Icon src={Backend} size={100}></Icon>
          </CardHead>
          <Description>
            <p>
              Construo o software arquitetado aplicando métodos como TDD e DDD.
              Preocupado com as regras de negócio, segurança, banco de dados,
              integração de webservices, qualidade e documentação do produto.
              Trabalho com arquiteturas monolíticas e de microserviços.
            </p>
            <li>modelagem de dados</li>
            <li>definição os requerimentos técnicos e estruturais</li>
            <li>testes unitários e de integração</li>
            <li>CD/CI</li>
          </Description>
        </Card>
        <Card>
          <CardHead>
            <h2>Front-End</h2>
            <Icon src={Frontend} size={100}></Icon>
          </CardHead>
          <Description>
            <p>
              Executo o protótipo idealizado e mantenho a fidelidade entre
              design e código em todos os aparelhos que o produto será usado.
              Com interatividade entre os elementos da página.
            </p>
            <li>implementação das UIs criadas pelo designer</li>
            <li>melhoria e manutenção constante</li>
            <li>compatibilidade entre diferentes navegadores e dispositivos</li>
            <li>testes unitários e E2E</li>
            <li>CD/CI</li>
          </Description>
        </Card>
        <Card>
          <CardHead>
            <h2>Mobile</h2>
            <Icon src={Mobile} size={100}></Icon>
          </CardHead>
          <Description>
            <p>
              Construo o Aplicativo (Android e IOS) desejado e mantenho a
              fidelidade entre UX/UI e código entre todos os devices. Com
              interatividade entre os elementos do aplicativo.
            </p>
            <li>implementação das UIs criadas pelo designer</li>
            <li>controle de fluxo e nagevação</li>
            <li>testes unitários</li>
          </Description>
        </Card>
      </Info>
    </Container>
  );
}
