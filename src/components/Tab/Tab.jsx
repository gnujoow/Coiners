import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const PriceIcon = <FontIcon className="material-icons">trending_up</FontIcon>;
const TrackingIcon = <FontIcon className="material-icons">swap_horiz</FontIcon>;
const InfoIcon = <FontIcon className="material-icons">feedback</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

const style = {
  position: 'fixed',
  bottom: '0px',
  width: '100vw'
}
class BottomTab extends Component {
  state = {
    selectedIndex: 0,
  };

  handleTouchTap = (index) => {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Paper zDepth={1} style={style}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Price"
            icon={PriceIcon}
            onTouchTap={() => this.handleTouchTap(0)}
          />
          <BottomNavigationItem
            label="Tracking"
            icon={TrackingIcon}
            onTouchTap={() => this.handleTouchTap(1)}
          />
          <BottomNavigationItem
            label="Info"
            icon={InfoIcon}
            onTouchTap={() => this.handleTouchTap(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomTab;
