import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
