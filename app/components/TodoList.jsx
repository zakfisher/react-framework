import React, { PropTypes } from 'react';

const TodoList = ({ todos, onClick }) => (
  <div className="todo-list">
    {todos.map(
      (todo) => {
        const style = {
          checkbox: { float: 'left', margin: '0 10px' },
          text: { color: todo.complete ? 'green' : 'red', fontSize: '14px', cursor: 'pointer' }
        };
        return (
          <div key={todo.id} onClick={() => { onClick(todo.id); }}>
            <input type="checkbox" checked={todo.complete} style={style.checkbox} readOnly />
            <p style={style.text} >{todo.text}</p>
          </div>
        );
      }
    )}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TodoList;
