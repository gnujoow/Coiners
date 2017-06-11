import {FETCH_PRICE, FETCH_PRICE_FILLED} from '../action/ActionTypes'

export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case FETCH_PRICE:
      return { isPinging: true };

    case FETCH_PRICE_FILLED:
      return { isPinging: false };

    default:
      return state;
  }
};
