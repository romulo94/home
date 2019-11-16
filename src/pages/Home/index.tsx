import React from 'react';

// import { Container } from './styles';

export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean;
}
interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Home() {
  return <div />;
}

export function Toggle(Props: ToggleProps) {
  return <button onClick={Props.ClickHandler}>Toggle</button>;
}

const PrintName: React.FC<Props> = props => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? 'bold' : 'normal' }}>OK</p>
    </div>
  );
};
