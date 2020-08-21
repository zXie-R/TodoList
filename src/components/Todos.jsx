import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

function Todos(props) {
  return props.todos.map((todo) =>
    <TodoItem 
      key={ todo.id } 
      content={ todo } 
      markComplete={props.markComplete} 
      delTodo={props.delTodo}
    />
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
