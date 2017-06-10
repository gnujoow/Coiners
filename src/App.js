import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TableExampleSimple from './components/table/Table.jsx'
import Compare from './containers/Compare.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Compare />
      </div>
    );
  }
}

export default App;
