import { createStore } from 'redux';
import { plannerReducer } from './reducer';

const store = createStore(
  plannerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
