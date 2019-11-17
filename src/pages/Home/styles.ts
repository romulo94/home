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

export const Head = styled.div`
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
    font-size: 24px;
  }

  @media only screen and (max-width: 600px) {
    position: relative;

    div {
      height: 128px;
    }
  }
`;

export const Icon = styled.img`
  width: ${(props: size) => `${props.size}px`};
  height: ${(props: size) => `${props.size}px`};

  margin: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0 20px;
  width: 100%;

  opacity: 0;

  animation: myshowinfo 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  z-index: 1000;

  @keyframes myshowinfo {
    0% {
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  h2 {
    padding-bottom: 20px;
    font-weight: 500;
    /* color: ${Colors.lighter}; */
  }
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
