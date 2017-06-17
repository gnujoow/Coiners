import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const TRACKER = {
  BTC: 'https://blockchain.info/ko/search?search=',
  ETH: 'https://etherscan.io/search?q=',
  ETC: 'https://gastracker.io/search?q='
}

const SUBMIT = "추적하기"

const HINT = '지갑주소 / TXid'

class Tracking extends Component {
  state = {
    btcInput: '',
    ethInput: '',
    etcInput: ''
  }

  handleChangeInput = (e) =>  {
    this.setState({
      [`${e.target.name}Input`]: e.target.value
    })
  }

  render = () => {
    return (
      <Paper>
        <TextField
          value={this.state.btcInput}
          name='btc'
          onChange={this.handleChangeInput}
          hintText={HINT}
          floatingLabelText="Bitcoin"
          underlineShow={false}
        />
        <RaisedButton
          name='btc'
          label={SUBMIT}
          primary={true}
          disabled={this.state.btcInput.length === 0}
          href={`${TRACKER.BTC}${this.state.btcInput}`}
          target='_blank'
        />
        <Divider />
        <TextField
          value={this.state.ethInput}
          name='eth'
          onChange={this.handleChangeInput}
          hintText={HINT}
          floatingLabelText="Ethereum"
          underlineShow={false}
        />
        <RaisedButton
          name='eth'
          label={SUBMIT}
          primary={true}
          disabled={this.state.ethInput.length === 0}
          href={`${TRACKER.ETH}${this.state.ethInput}`}
          target='_blank'
        />
        <Divider />
        <TextField
          value={this.state.etcInput}
          name='etc'
          onChange={this.handleChangeInput}
          hintText={HINT}
          floatingLabelText="Ethereum Classic"
          underlineShow={false}
        />
        <RaisedButton
          name='etc'
          label={SUBMIT}
          primary={true}
          disabled={this.state.etcInput.length === 0}
          href={`${TRACKER.ETC}${this.state.etcInput}`}
          target='_blank'
        />
      </Paper>
    )
  }
}

export default Tracking
