import React from 'react';

import Stack from 'components/Stack';
import Overview from 'components/Overview';
import Head from 'components/Head';
import Info from 'components/Info';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Head></Head>
      <Stack />
      <Overview />
      <Info />
    </Container>
  );
}
