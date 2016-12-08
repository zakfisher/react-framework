import { combineReducers } from 'redux';
import * as todoReducers from './todo';

/**
  Root Reducer
  ---
  ./app/reducers/index.js

  - The root reducer is responsible for collecting all the
  reducers that we provide to our app's Redux data store.

  - In this file we can choose to use only the reducers that we absolutely need
  (in case this repo houses many apps).

  - Note: *this is included on the client only*.

  @returns {object} rootReducer
*/

const rootReducer = combineReducers({
  ...todoReducers
});

export default rootReducer;
