import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;

  padding: 30px;
  margin-top: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  /* @media (max-width: 600px) {
    flex-direction: column;
  } */
`;

export const Info = styled.div`
  padding-left: 20px;
  width: 650px;
  height: 100%;

  span {
    color: ${colors.primary};
    font-size: 3em;
  }

  div {
    padding-left: 0;
  }

  @media (max-width: 600px) {
    padding: 10px;
    height: 80px;
    width: 100%;
    margin-bottom: 20px;

    span {
      font-size: 2em;
    }

    div {
      padding-left: 0;
    }
  }
`;

export const Name = styled.p`
  font-size: 18px;
`;

export const Avatar = styled.img`
  box-shadow: 5px 5px 15px #000000;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  margin: 20px;
`;

export const ContainerIconSVG = styled.div`
  display: flex;
  flex: 1;
  align-self: baseline;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Stack = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 360px;
`;

export const ContainerDescription = styled.div`
  display: flex;
  width: 80%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background: #00000060;
  box-shadow: 5px 5px 15px #000000;
  margin-top: 36px;
  padding: 20px;
`;

export const Description = styled.div`
  max-width: 600px;

  p {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    font-weight: 200;
  }
`;

export const Skills = styled.div`
  width: 250px;
`;
