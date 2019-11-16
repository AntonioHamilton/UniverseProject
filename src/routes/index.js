import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/main/index';
import LoginPage from '../pages/login/index';
import InscricaoPage from '../pages/inscricao/index';
//Toda vez que vc criar uma tag Route, ele vai criar uma rota, aí vc coloca o path da url, e o component é a página.
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path = "/login" component={LoginPage} />
      <Route path = "/inscricao" component={InscricaoPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;