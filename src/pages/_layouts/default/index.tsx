import React, { ReactElement } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Wrapper } from './styles';

interface Props {
  children: ReactElement;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      {/* <Header /> */}
      {children}
      <Footer />
    </Wrapper>
  );
}
