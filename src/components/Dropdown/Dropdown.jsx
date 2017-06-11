import React from 'react';
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {fetchPrice} from '../../action/ActionCreator'

const styles = {
  customWidth: {
    width: 200,
  },
};

const MARKET_LIST = [
  {label: 'Poloniex', name: 'poloniex'},
  {label: 'Bitfinex', name: 'bitfinex'},
  {label: 'Kraken', name: 'kraken'},
  {label: 'Bithumb', name: 'bithumb'},
]

class DropDownMenuSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'bithumb'};
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    fetchPrice(value);
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
  return { posts: '' };
}

DropDownMenuSimpleExample = connect(
  mapStateToProps, {fetchPrice}
)(DropDownMenuSimpleExample);

export default DropDownMenuSimpleExample
