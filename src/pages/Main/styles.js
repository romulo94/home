import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;

  span {
    color: #eee;
    font-size: 3em;
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.img`
  box-shadow: 5px 5px 15px #000000;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  margin: 20px;
`;

export const Stack = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 300px;
`;

export const Description = styled.p`
  display: flex;
  width: 100%;
  font-size: 18px;
`;
