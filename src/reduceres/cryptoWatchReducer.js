import {FETCH_PRICE, FETCH_PRICE_FILLED} from '../action/ActionTypes'

const INITIAL_STATE = {
  market: 'no_market',
  pirce: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRICE:
      return { market: action.payload };

    case FETCH_PRICE_FILLED:
      return { isPinging: false, pirce: action.payload };

    default:
      return state;
  }
};
