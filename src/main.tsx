import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './datepicker-component';
import Auto from './datetime-component';
import Combo from './calendar-component';
import DateRange from './daterangepicker-component';
import Sidebar from './sidebar-component';
import Time from './timepicker-component';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/datetime-component' component={Auto}/>
      <Route path='/calendar-component' component={Combo}/>
      <Route path='/daterangepicker-component' component={DateRange}/>
      <Route path='/sidebar-component' component={Sidebar}/>
      <Route path='/timepicker-component' component={Time}/>
    </Switch>
  </main>
)

export default Main
