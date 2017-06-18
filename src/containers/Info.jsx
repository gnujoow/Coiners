import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Snackbar from 'material-ui/Snackbar';

import {copy} from '../commonFuncs.js'

const WALLET = {
  BTC: '1DW2wRXMB3ifdohfaAVrDwF4Bpuiqz1xns',
  ETH: '0x659e2f6ac21a1d2d9c867c4ac093c41a6327e2b3',
  ETC: '0xd103439fb772b8f2c993073fa7e23837a5fcdc62',
  LTC: 'LNNmqLerR5ua9FkNNsz1HX5bMn9H6tqQtg'
}
class Info extends Component {
  state = {
    snackbarOpen: false
  }
  handleRequestClose = () => {
    this.setState({snackbarOpen: false})
  }
  handleClickItem = (e, currency) => {
    copy(currency);
    this.setState({snackbarOpen: true})
  }
  render = () => {
    return (
      <div>
        <h1>Donate</h1>
        <p>더욱 좋은 서비스를 만들도록 노력하겠습니다.</p>
        <Paper>
          <List>
            <ListItem
              primaryText="Bitcoin"
              secondaryText={WALLET.BTC}
              onTouchTap={(e) => this.handleClickItem(e, WALLET.BTC)}
            />
            <ListItem
              primaryText="Ethereum"
              secondaryText={WALLET.ETH}
              onTouchTap={(e) => this.handleClickItem(e, WALLET.ETH)}
            />
            <ListItem
              primaryText="Ethereum Classic"
              secondaryText={WALLET.ETC}
              onTouchTap={(e) => this.handleClickItem(e, WALLET.ETC)}
            />
            <ListItem
              primaryText="LiteCoin"
              secondaryText={WALLET.LTC}
              onTouchTap={(e) => this.handleClickItem(e, WALLET.LTC)}
            />
          </List>
        </Paper>
        <Snackbar
          open={this.state.snackbarOpen}
          message="지갑 주소가 복사되었습니다"
          action="닫기"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
          onActionTouchTap={this.handleRequestClose}
        />
      </div>
    )
  }
}

export default Info
