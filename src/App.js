import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
// import {Route,Switch} from 'react-router-dom';
import PrivateRoute from './pages/components/PrivateRoute';
import Login from './pages/Login'
import Home from './pages/Home';
import './assets/font/iconfont.css'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/' component={Home}/>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
