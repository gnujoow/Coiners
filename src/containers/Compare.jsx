import React, {Component, PropTypes} from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import DropDownMenuSimpleExample from '../components/Dropdown/Dropdown'
const Item = ['BTC', 'ETH', 'LTC', 'XRP']

class Compare extends Component {
  render = () => {
    const Left = Item.map((e, idx) => {
      return (
        <TableRow key={`left${idx}`}>
          <TableRowColumn>{`L_${e}`}</TableRowColumn>
          <TableRowColumn>0</TableRowColumn>
          <TableRowColumn>0</TableRowColumn>
        </TableRow>
      )
    })

    const Right = Item.map((e, idx) => {
      return (
        <TableRow key={`right${idx}`}>
          <TableRowColumn>0</TableRowColumn>
          <TableRowColumn>0</TableRowColumn>
          <TableRowColumn>{`R_${e}`}</TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6'>
            <DropDownMenuSimpleExample
              className='left'
            />

          </div>
          <div className='col s6'>
            <DropDownMenuSimpleExample
              className='right'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col s5'>
            <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn>Item</TableHeaderColumn>
                  <TableHeaderColumn>Price</TableHeaderColumn>
                  <TableHeaderColumn>BTC</TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody
                displayRowCheckbox={false}
              >
                {Left}
              </TableBody>
            </Table>
          </div>
          <div className='col s2'>
            <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn>compare</TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody
                displayRowCheckbox={false}
              >
                <TableRow>
                  <TableRowColumn>0%</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>0%</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>0%</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>0%</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='col s5'>
            <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn>Item</TableHeaderColumn>
                  <TableHeaderColumn>Price</TableHeaderColumn>
                  <TableHeaderColumn>BTC</TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody
                displayRowCheckbox={false}
              >
                {Right}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

export default Compare
