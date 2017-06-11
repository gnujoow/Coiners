import { ajax } from 'rxjs/observable/dom/ajax';
import {FETCH_PRICE, FETCH_PRICE_FILLED} from './ActionTypes.js'

const ROOT_URL = 'https://api.cryptowat.ch/'

export const fetchPrice = (market) => {
  console.log('fetchPrice', market)
  return {
    type: FETCH_PRICE,
    payload: market
  }
};

export const fetchPriceFilled = (payload) => {
  console.log('fetchPriceFilled', payload)
  return {
      type: FETCH_PRICE_FILLED,
      payload: payload
  }
}
