import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  max-width: 320px;

  padding: 0 30px 30px 30px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 30px 30px 0px;
    margin-top: 0px;
  }
`;

export const ContainerLinks = styled.div``;
