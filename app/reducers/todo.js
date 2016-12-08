import actions from '../actions';

/*
 * Helpers
 */

let newTodoId = 0;

function newTodo(action) {
  const todo = {
    id: newTodoId,
    text: action.text,
    complete: false
  };
  newTodoId++;
  return todo;
}

/*
 * Reducers
 */

export function todos(state = [], action) {
  switch (action.type) {

  case actions.ADD_TODO:
    return [
      ...state,
      newTodo(action)
    ];

  case actions.TOGGLE_TODO_COMPLETE:
    return state.map((todo) => {
      if (action.id === todo.id) {
        return {
          id: todo.id,
          text: todo.text,
          complete: !todo.complete
        };
      }
      return todo;
    });

  default:
    return state;
  }
}

export function todoFilter(state = actions.Filters.ALL, action) {
  switch (action.type) {

  case actions.SET_TODO_FILTER:
    return action.filter;

  default:
    return state;
  }
}
