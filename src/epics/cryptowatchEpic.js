import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import {fetchPrice, fetchPriceFilled} from '../action/ActionCreator'
import {FETCH_PRICE, FETCH_PRICE_FILLED} from '../action/ActionTypes'

const cryptowatchEpic = action$ =>
  action$.ofType(FETCH_PRICE).mergeMap(action =>
    ajax.getJSON(`https://api.coinmarketcap.com/v1/global/`)
      .map(response => fetchPriceFilled(response))
    );

export default cryptowatchEpic
