import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import MainPage from './app/main/MainPage';
import DetailPage from './app/detail/DetailPage'

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route
        exact
        path="/main"
        render={(props) => < MainPage {...props} />}
      />
      <Route
        exact
        path="/detail"
        render={(props) => < DetailPage {...props} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;