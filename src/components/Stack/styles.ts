import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 360px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;
