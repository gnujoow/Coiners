import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reduceres/rootReducer'
import rootEpic from './epics/rootEpic';
import cryptowatchEpic from './epics/cryptowatchEpic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(cryptowatchEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );
  return store;
}
