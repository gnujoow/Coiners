import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const TRACKER = {
  btc: 'https://blockchain.info/ko/search?search=',
  eth: 'https://etherscan.io/search?q=',
  etc: 'https://gastracker.io/search?q='
}

const SUBMIT = "추적하기"

const HINT = '지갑주소 / TXid'

class Tracking extends Component {
  render = () => {
    return (
      <Paper>
        <TextField
          hintText={HINT}
          floatingLabelText="Bitcoin"
          underlineShow={false}
        />
        <RaisedButton label={SUBMIT} primary={true} />
        <Divider />
        <TextField
          hintText={HINT}
          floatingLabelText="Ethereum"
          underlineShow={false}
        />
        <RaisedButton label={SUBMIT} primary={true} />
        <Divider />
        <TextField
          hintText={HINT}
          floatingLabelText="Ethereum Classic"
          underlineShow={false}
        />
        <RaisedButton label={SUBMIT} primary={true} />
      </Paper>
    )
  }
}

export default Tracking
