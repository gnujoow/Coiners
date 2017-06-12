import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TableExampleSimple from './components/table/Table'
import Compare from './containers/Compare'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Table from './components/table/Table'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        {/* <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        /> */}
        {/* <Table /> */}
        <Compare />
      </MuiThemeProvider>
    );
  }
}

export default App;
