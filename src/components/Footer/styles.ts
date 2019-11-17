import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;

  bottom: 0;
  padding: 20px 20px 5px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 36px;

  h3 {
    font-weight: lighter;
  }
`;

export const Divider = styled.div`
  background: #222;
  height: 80%;
  width: 3px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Right = styled.div`
  justify-content: center;
  display: flex;
  right: 0;
  width: 50%;
`;

export const Left = styled.div`
  justify-content: center;
  display: flex;
  left: 0;
  width: 50%;
`;

export const Local = styled.a`
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
`;
