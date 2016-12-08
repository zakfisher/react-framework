import store from '../store';
import actions from '../actions';

const sampleTodos = [
  'do stuff',
  'do more stuff',
  'ok stop doing stuff now'
];

/**
  Hydrate Redux Store
  ---
  ./app/fixtures/hydrate.js

  - This method is responsible for hydrating our Redux store with initial data.

  @returns {function} hydrate
*/

const hydrate = () => {
  sampleTodos.forEach((todo) => {
    store.dispatch(
      actions.addTodo(todo)
    );
  });
};

export default hydrate;
