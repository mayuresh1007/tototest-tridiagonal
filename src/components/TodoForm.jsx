import { useContext, useState } from "react";
import { TodosContext } from "../../TodoContext";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const { todos, setTodos } = useContext(TodosContext);

  const handleInput = (e) => setTask(e.target.value);

  const Addtodo = () => {
    const newtodo = {
      id: todos.length + 1,
      label: task,
      checked: false,
    };
    if (task !== "") {
      const addTodo = [...todos, newtodo];
      setTodos(addTodo);
      setTask("");
    }
  };
  return (
    <div>
      <h3>Form list</h3>
      <input type="text" value={task} onChange={handleInput} />
      <button onClick={Addtodo}>Add</button>
    </div>
  );
};

export default TodoForm;
