import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import {fetchPrice, fetchPriceFilled} from '../action/ActionCreator'
import {FETCH_PRICE, FETCH_PRICE_FILLED} from '../action/ActionTypes'

const baseUrl = 'https://api.cryptowat.ch/markets/'

    const cryptowatchEpic = action$ =>
    action$.ofType(FETCH_PRICE).mergeMap(action =>
        ajax({
          url: `${baseUrl}${action.payload}/btcusd/price`,
          crossDomain: true,
          createXHR: function () {
            return new XMLHttpRequest();
          }
        }).map(response => fetchPriceFilled(response))
      );

export default cryptowatchEpic
