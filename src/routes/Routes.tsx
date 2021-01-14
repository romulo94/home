/* eslint-disable react/prop-types */
import { Route, RouteProps } from 'react-router-dom';
import { FC, FunctionComponent } from 'react';

type Props = {
  component: FunctionComponent;
  isPrivate?: boolean;
};

type Params = RouteProps & Props;

const RouteWrapper: FC<Params> = ({
  component: Component,
  isPrivate,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Component {...props} />
    )}
  />
);

export default RouteWrapper;
