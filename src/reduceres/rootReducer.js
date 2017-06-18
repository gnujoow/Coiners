import { combineReducers } from 'redux';

import cryptowatchEpic from './cryptoWatchReducer';

const rootReducer = combineReducers({
  cryptowatchEpic
});

export default rootReducer;
