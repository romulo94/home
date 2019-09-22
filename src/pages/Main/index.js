import React from 'react';
import { DiNodejsSmall, DiReact } from 'react-icons/di';
import avatar from '~/assets/avatar.svg';

import { Container, Avatar } from './styles';

export default function Main() {
  return (
    <div>
      <h1>Desenvolvedor Fullstack</h1>
      <p>
        Sou um verdadeiro amante da área de programação, atualmente focado em
        JavaScript. NodeJS, ReactJS , React Native.
      </p>
      <DiNodejsSmall size={48} color="#3c873a" />
      <DiReact size={48} color="#61dafb" />
      <DiReact size={48} color="#61dafb" />
      <Avatar src={avatar} alt="avatar" size={150} />
    </div>
  );
}
