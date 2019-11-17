import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  background: #19181a;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: #7159c1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
