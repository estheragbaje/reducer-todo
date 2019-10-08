import React, { useReducer } from "react";
import uuid from "uuid";

export const initialTodos = [
  {
    title: "Learn about reducers",
    iscompleted: false,
    id: 389298758
  },
  {
    title: "Learn about reducers",
    iscompleted: false,
    id: 389297589
  },
  {
    title: "Learn about reducers",
    iscompleted: false,
    id: 389298759
  }
];

export const initialState = {
  todos: initialTodos,
  todo: ""
};

const ADD_TODOS = "ADD_TODOS";
const HANDLE_CHANGE = "HANDLE_CHANGE";
const TOGGLE_TODO_COMPLETE = "TOGGLE_TODO_COMPLETE";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TODOS:
      const newTodo = {
        id: new Date(),
        title: state.todo,
        isCompleted: false
      };
      return { ...state, todos: state.todos.concat(newTodo), todo: "" };

    case HANDLE_CHANGE:
      return { ...state, todo: action.payload };

    case TOGGLE_TODO_COMPLETE:
      const newItem = {
        ...action.payload,
        isCompleted: !action.payload.isCompleted
      };
      const newTodos = state.todos.map(_todo => {
        if (_todo.id === action.payload.id) {
          return newItem;
        } else {
          return _todo;
        }
      });
      return { ...state, todos: newTodos };

    case CLEAR_COMPLETED:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
}
