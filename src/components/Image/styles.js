import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  svg {
    cursor: ${props => (props.cursor ? 'pointer' : 'unset')};
    :hover {
      fill: ${props => lighten(0.075, props.color)};
    }
  }
`;
