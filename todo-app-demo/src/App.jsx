import { useState } from "react";

import {
  addTodo,
  deleteTodo,
  toggleTodo,
  filterTodo,
} from "./redux/todoaction";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [text, setText] = useState("");
  const { todos, filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const fitleredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here to add todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
      <br />
      <input
        value={filter}
        onChange={(e) => dispatch(filterTodo(e.target.value))}
      />

      <ul>
        {fitleredTodos &&
          fitleredTodos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
