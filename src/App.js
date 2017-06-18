import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Compare from './containers/Compare'
import Info from './containers/Info'
import Tracking from './containers/Tracking'

import BottomTab from './components/Tab/Tab.jsx'
import Titlebar from './components/TitleBar/Titlebar.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Titlebar />
          <Switch>
            <Route exact path='/track' component={Tracking} />
            <Route path='/compare' component={Compare} />
            <Route path='/info' component={Info} />
          </Switch>
          <BottomTab />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
