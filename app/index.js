import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Route config
import routes from './routes';

// Redux store
import store from './store';
import roadmapHydrate from './fixtures/roadmap/hydrate';

roadmapHydrate();

/**
  Client-side entry point
  ---
  ./app/index.js

  In this class we:
  - call `ReactDOM.render()` on the client
  - allow client-side routing with React Router
  - pass in our Redux data store

  @returns {object} Client
*/
class Client {
  constructor() {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>,
      document.getElementById('root')
    );
  }
}

export default new Client();
