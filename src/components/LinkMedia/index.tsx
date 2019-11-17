import React from 'react';

import ButtonIcon from 'components/ButtonIcon';

import { Container } from './styles';
import Colors from 'styles/colors';

import Coding from 'assets/coding';
import GitHub from 'assets/github';
import LinkedIn from 'assets/linkedin';

export default function LinkMedia() {
  return (
    <Container>
      <ButtonIcon
        icon={Coding}
        size={48}
        color={Colors.dark}
        link="https://github.com/romulo94/homepage"
      />
      <ButtonIcon
        icon={GitHub}
        size={48}
        color={Colors.dark}
        link="https://github.com/romulo94"
      />
      <ButtonIcon
        icon={LinkedIn}
        size={48}
        color={Colors.dark}
        link="https://www.linkedin.com/in/romulo-rocha-de-oliveira-715a8a142/"
      />
    </Container>
  );
}
