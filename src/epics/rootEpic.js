import { combineEpics } from 'redux-observable';
import { cryptowatchEpic } from './cryptowatchEpic'

export const rootEpic = combineEpics(
  cryptowatchEpic,
);
