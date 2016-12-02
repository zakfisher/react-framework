import { combineReducers } from 'redux';
import * as roadmapReducers from './roadmap';

/**
  Root Reducer
  ---
  ./app/reducers/index.js

  - The root reducer is responsible for collecting all the
  reducers that we provide to our app's Redux data store.

  - Note: *this is included on the client only*.

  @returns {object} rootReducer
*/
const rootReducer = combineReducers({
  ...roadmapReducers
});
export default rootReducer;
