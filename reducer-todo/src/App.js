import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/Reducer";
import "./App.css";
import TodoList from "./components/TodoList";
import TodosForm from "./components/TodosForm";
// function App() {
//   const [todos, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="App">
//       <TodoList todos={todos}></TodoList>
//       <Form todos={todos} />
//     </div>
//   );
// }

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodo = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODOS", payload: state.todo });
  };

  const handleChange = event => {
    dispatch({ type: "HANDLE_CHANGE", payload: event.target.value });
  };

  const toggleComplete = todo => {
    dispatch({ type: "TOGGLE_TODO_COMPLETE", payload: todo });
  };

  const clearCompleted = () => {
    const newTodos = state.todos.filter(todo => !todo.isCompleted);
    dispatch({ type: "CLEAR_COMPLETED", payload: newTodos });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodosForm
        title={state.todo}
        onChange={handleChange}
        addTodo={addTodo}
        clearCompleted={clearCompleted}
      />
      <TodoList todos={state.todos} onToggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
