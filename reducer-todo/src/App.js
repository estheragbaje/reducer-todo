import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/Reducer";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
