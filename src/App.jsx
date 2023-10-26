import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodosContext } from "../TodoContext";

const todosTemplate = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: false,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: false,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todosTemplate);

  return (
    <div className="container">
      <TodosContext.Provider value={{todos,setTodos}}>
        <h1>hello context api</h1>
        <TodoList />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
