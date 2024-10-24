import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./addTodo.css";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-todo" onChange={handleSubmit}>
      <input
        className="add-todo-input"
        type="text"
        placeholder="Todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="add-todo-button"
        onClick={handleAdd}
        type="submit"
        disabled={!text.trim()}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
