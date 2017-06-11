import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reduceres/rootReducer'
import { rootEpic } from './epics/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(
  rootReducer,
  applyMiddleware(epicMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
