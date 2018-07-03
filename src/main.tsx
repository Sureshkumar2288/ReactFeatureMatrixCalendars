import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './datepicker-component';
import Auto from './datetime-component';
import Combo from './calendar-component';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/datetime-component' component={Auto}/>
      <Route path='/calendar-component' component={Combo}/>
    </Switch>
  </main>
)

export default Main
