import React, { useReducer } from "react";
import uuid from "uuid";

export const initialTodos = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
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
        id: uuid(),
        title: state.todo,
        isCompleted: false
      };
      return { ...state, todos: state.todos.concat(newTodo) };

    case HANDLE_CHANGE:
      return { ...state, todo: action.payload };

    case TOGGLE_TODO_COMPLETE:
      const newItem = {
        ...action.payload,
        isCompleted: !action.payload.isCompleted
      };
      const newTodos = state.todos.map(_todo => {
        if (_todo === action.payload.id) {
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
