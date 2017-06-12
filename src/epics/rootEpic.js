import { combineEpics } from 'redux-observable';
import cryptowatchEpic from './cryptowatchEpic'

const rootEpic = combineEpics(
  cryptowatchEpic
);

export default rootEpic
