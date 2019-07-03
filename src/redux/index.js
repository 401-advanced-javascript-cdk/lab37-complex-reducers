import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import combinedReducers from './reducer-combiner.js';

export default () => {
  return createStore(combinedReducers, composeWithDevTools());
}