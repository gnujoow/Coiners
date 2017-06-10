import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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

export default class DropDownMenuSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'bithumb'};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const items = MARKET_LIST.map(item => {
      return (
        <MenuItem value={item.name} primaryText={item.label} />
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
