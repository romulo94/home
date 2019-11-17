import React, { ReactElement, ReactComponentElement, ReactNode } from 'react';

import { Container } from './styles';

interface Props {
  icon: React.ReactType;
  size: Number;
  color: string;
  link: string;
}

export default function ButtonIcon({ icon: Icon, size, color, link }: Props) {
  return (
    <Container href={link} color={color} target="blank">
      <Icon size={size} />
    </Container>
  );
}
