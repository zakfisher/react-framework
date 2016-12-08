import { connect } from 'react-redux';
import actions from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, todoFilter) => {
  switch (todoFilter) {

  case actions.Filters.ALL:
    return todos;

  case actions.Filters.COMPLETE:
    return todos.filter((todo) => todo.complete);

  case actions.Filters.INCOMPLETE:
    return todos.filter((todo) => !todo.complete);

  default:
    return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  const { filter } = ownProps.params;
  return {
    todos: filter ? getVisibleTodos(state.todos, ownProps.params.filter.toUpperCase()) : state.todos
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    dispatch(
      actions.toggleTodoComplete(id)
    );
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
