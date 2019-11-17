import styled from 'styled-components';
import { lighten } from 'polished';

interface Color {
  color: any;
}

export const Container = styled.a`
  svg {
    fill: ${props => props.color};
    :hover {
      fill: ${(props: Color) => lighten(0.075, props.color)};
    }
  }
`;
