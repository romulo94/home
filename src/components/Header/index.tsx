import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Info">Info</Link>
        </nav>
      </Content>
    </Container>
  );
}
