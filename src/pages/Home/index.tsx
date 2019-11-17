import React from 'react';

import Stack from 'components/Stack';
import Overview from 'components/Overview';
import Head from 'components/Head';
import Info from 'components/Info';
import LinkMedia from 'components/LinkMedia';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Head />
      <LinkMedia />
      <Stack />
      <Overview />
      <Info />
    </Container>
  );
}
