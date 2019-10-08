import React from "react";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
