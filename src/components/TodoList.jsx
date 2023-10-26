import { useContext } from "react";
import { TodosContext } from "../../TodoContext";
import Checkbox from "./Checkbox";
import Alert from "react-bootstrap/Alert";
const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const onDelete = (id) => {
    const newlist = todos.filter((todo) => todo.id !== id);
    setTodos(newlist);
  };
  const toggleCheck = (id) => {
    const checkedlist = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(checkedlist);
  };
  // console.log(todos.length == 0);
  if (todos.length == 0) {
    return (
      <>
        <h3>TodoList</h3> <Alert variant={"success"}>"No task pending"</Alert>
      </>
    );
  }
  return (
    <div>
      <h3>TodoList</h3>

      {todos.map((todo) => {
        return (
          <Checkbox
            key={todo.id}
            id={todo.id}
            label={todo.label}
            checked={todo.checked}
            onDelete={() => onDelete(todo.id)}
            onClick={() => toggleCheck(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
