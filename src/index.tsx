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


export class Default extends React.Component<{}, {}> {

  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Syncfusion controls</h2>
          <ul>
            <li><Link to={'/'}>DatePicker</Link></li>
            <li><Link to={'/datetime-component'}>DateTimePicker</Link></li>
            <li><Link to={'/combo-component'}>Calendar</Link></li>
          </ul>
          <hr />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/datetime-component' component={Auto} />
            <Route exact path='/combo-component' component={Combo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Default />, document.getElementById('sample'));
