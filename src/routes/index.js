import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

import MainPage from '../pages/main/index';
import LoginPage from '../pages/login/index';
import RegisterPage from '../pages/register/index';
import SystemPage from '../pages/system/index';
import ManagePage from '../pages/manage/index';
//Toda vez que vc criar uma tag Route, ele vai criar uma rota, aí vc coloca o path da url, e o component é a página.

const PrivateRoute = ({ component:Component, ...rest }) => (
  <Route 
    {...rest}
    render = { props => 
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{pathname:'/', state: { from: props.location } }}/>
    )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path = "/login" component={LoginPage} />
      <Route path = "/inscricao" component={RegisterPage} />
      <PrivateRoute path = "/sistema" component={SystemPage}/>
      <PrivateRoute path = "/gerenciar" component={ManagePage}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;