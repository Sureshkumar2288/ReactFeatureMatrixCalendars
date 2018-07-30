/**
 * AutoComplete Default functionality Sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import { SampleBase } from './sample-base';
// import { PropertyPane } from './property-pane';
import Home from './datepicker-component';
import Auto from './datetime-component';
import Combo from './calendar-component';
import DateRange from './daterangepicker-component';
import sidebar from './sidebar-component';


export class Default extends React.Component<{}, {}> {

  render() {
    return (
      <BrowserRouter>
        <div >
          <h2>Syncfusion controls</h2>
          <ul className='navigation'>
            <li><Link to={'/'}>DatePicker</Link></li>
            <li><Link to={'/datetime-component'}>DateTimePicker</Link></li>
            <li><Link to={'/combo-component'}>Calendar</Link></li>
            <li><Link to={'/daterangepicker-component'}>DateRangePicker</Link></li>
            <li><Link to={'/sidebar-component'}>Sidebar</Link></li>
          </ul>
          <hr />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/datetime-component' component={Auto} />
            <Route exact path='/combo-component' component={Combo} />
            <Route exact path='/daterangepicker-component' component={DateRange} />
            <Route exact path='/sidebar-component' component={sidebar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Default />, document.getElementById('sample'));
