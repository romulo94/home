import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.a`
  svg {
    fill: ${props => props.color};
    :hover {
      fill: ${props => lighten(0.075, props.color)};
    }
  }
`;
