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

  width: 100%;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    padding: 20px 0;
  }
`;

export const Avatar = styled.img`
  box-shadow: 5px 5px 15px #000000;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: ${(props: size) => `${props.size}px`};
  height: ${(props: size) => `${props.size}px`};

  margin: 20px;

  @media only screen and (min-width: 600px) {
    position: relative;

    animation: mymove 3s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;

    z-index: 1000;

    @keyframes mymove {
      from {
      }
      to {
        transform: translateX(300px);
      }
    }
  }
`;

export const Box = styled.div`
  position: absolute;

  margin: 20px;
  z-index: 0;

  span {
    font-size: 28px;
    color: ${Colors.lighter};
  }

  @media only screen and (max-width: 600px) {
    position: relative;

    div {
      height: 128px;
    }
  }
`;
