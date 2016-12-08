import * as todoActions from './todo';

/**
  App Actions
  ---
  ./app/actions/index.js

  - The app actions include all of the actions used by this app.

  - In this file we can choose to use only the actions that we absolutely need
  (in case this repo houses many apps).

  @returns {object} appActions
*/

const appActions = {
  ...todoActions
};

export default appActions;
