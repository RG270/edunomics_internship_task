import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sign_up from './components/Sign_up'
import Userpage from './components/user/Userpage'
import Mainpage from './components/Mainpage'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Mainpage}></Route>
      <Route exact path='/signup' component={Sign_up}></Route>
      <Route exact path='/user' component={Userpage}></Route>
    </Switch>
  );
}

export default Main;