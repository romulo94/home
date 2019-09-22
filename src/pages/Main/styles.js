import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`;

export const Stack = styled.div`
  display: flex;
`;
