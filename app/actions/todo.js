/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const SET_TODO_FILTER = 'SET_TODO_FILTER';
export const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';

/*
 * other constants
 */

export const Filters = {
  ALL: 'ALL',
  COMPLETE: 'COMPLETE',
  INCOMPLETE: 'INCOMPLETE'
};

/*
 * action creators
 */

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function filterTodos(filter) {
  return {
    type: SET_TODO_FILTER,
    filter
  };
}

export function toggleTodoComplete(id) {
  return {
    type: TOGGLE_TODO_COMPLETE,
    id
  };
}
