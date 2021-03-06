import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {fetchPrice} from '../../action/ActionCreator'

const styles = {
  customWidth: {
    width: 200,
  },
};

const MARKET_LIST = [
  {label: 'Poloniex', name: 'Poloniex'},
  {label: 'Bitfinex', name: 'Bitfinex'},
  {label: 'Coinone', name: 'Coinone'},
]

class DropDownMenuSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Poloniex'};
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    this.props.fetchPrice(value);
  }

  render() {
    const items = MARKET_LIST.map((item, index) => {
      return (
        <MenuItem key={index} value={item.name} primaryText={item.label} />
      )
    })
    return (
        <DropDownMenu
          className={this.props.className}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {items}
        </DropDownMenu>
    );
  }
}

function mapStateToProps(state){
  return {
    ...state.cryptowatchEpic
  };
}

DropDownMenuSimpleExample = connect(
  mapStateToProps, {fetchPrice}
)(DropDownMenuSimpleExample);

export default DropDownMenuSimpleExample
