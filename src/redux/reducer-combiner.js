import { combineReducers } from 'redux';

import instrumentTypes from './instrument-type-reducer.js';
import instrument from './instrument-reducer.js';

export default combineReducers({
  instrumentTypes,
  instrument
});