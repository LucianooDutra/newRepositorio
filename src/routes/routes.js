import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Principal from '../pages/principal/Principal';
import NotFound from '../pages/notFound/NotFound';

export default function Rotas() {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={ Principal } />
          <Route path="/*" component={ NotFound } />
      </Switch>
    </div>
  );
}