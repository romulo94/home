import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          {/* <img src={logo} alt="GoBarber" /> */}
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Algo</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            {/* <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="adorable"
            /> */}
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
