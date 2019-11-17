import styled from 'styled-components';
import Colors from 'styles/colors';

type size = {
  size: Number;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  width: 100%;
  padding: 20px;
`;

export const Icon = styled.img`
  width: ${(props: size) => `${props.size}px`};
  height: ${(props: size) => `${props.size}px`};

  margin: 20px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;

  p {
    font-size: 16px;
  }
  li {
    font-size: 15px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 25px 0;
  }
  @media only screen and (min-width: 600px) {
    :nth-child(2n + 1) {
      flex-direction: row-reverse;
    }
  }
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;
