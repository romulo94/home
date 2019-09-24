import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  img {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
  }
`;
