import React from 'react';

import { Container, Box, Divider, Info, Right, Left, Local } from './styles';

export default function Footer() {
  return (
    <Container>
      <Box>
        <Left>
          <h3>Rômulo Rocha de Oliveira</h3>
        </Left>
        <Divider />

        <Right>
          <Info>
            <span>+55 (85) 9 8838-9064</span>
            <span>romulorocha063@gmail.com</span>
          </Info>
        </Right>
      </Box>
      <Local
        target="_blank"
        href="https://www.google.com/maps/place/Fortaleza+-+State+of+Cear%C3%A1/@-3.7900894,-38.6590335,11z/data=!3m1!4b1!4m5!3m4!1s0x7c74c3f464c783f:0x4661c60a0c6b37ca!8m2!3d-3.7327144!4d-38.5269981"
      >
        Fortaleza - CE
      </Local>
    </Container>
  );
}
