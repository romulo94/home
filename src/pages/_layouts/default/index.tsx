import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Wrapper } from './styles';

interface Props {
  children: React.Component;
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
