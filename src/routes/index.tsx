import { Switch, Redirect } from 'react-router-dom';

import Route from './Routes';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}
