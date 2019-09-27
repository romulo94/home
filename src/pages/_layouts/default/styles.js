import styled from 'styled-components';
import { darken } from 'polished';
// import colors from '~/styles/colors';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  flex-direction: column;
  align-content: center;
  max-width: 1440px;

  position: relative;
  min-height: 100vh;

  @media (min-width: 1441px) {
    background: ${darken(0.02, '#191920')};
    margin: 20px;
    border-radius: 20px;
  }
`;
