import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/main/index';
import LoginPage from '../pages/login/index';
import RegisterPage from '../pages/register/index';
//Toda vez que vc criar uma tag Route, ele vai criar uma rota, aí vc coloca o path da url, e o component é a página.
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path = "/login" component={LoginPage} />
      <Route path = "/inscricao" component={RegisterPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;