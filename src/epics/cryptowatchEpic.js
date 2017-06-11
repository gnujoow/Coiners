import { ajax } from 'rxjs/observable/dom/ajax';

import {fetchPrice, fetchPriceFilled} from '../action/ActionCreator'
import {FETCH_PRICE} from '../action/ActionTypes'

const baseUrl = 'https://api.cryptowat.ch/markets/'

export const cryptowatchEpic = action$ =>
  action$.ofType(FETCH_PRICE)
    .mergeMap(action => {
      console.log('action', action)
      ajax.getJSON(`${baseUrl}`)
        .map(response => fetchPriceFilled(response))
    }
  );
