import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./todoItem.css";

const TodoItem = ({ todo }) => {
  const { deleteTodo, editTodo, toggleComplete } = useContext(TodoContext);
  const [editing, setEditing] = useState("");
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (editing && newText.trim() !== "") {
      editTodo(todo.id, newText);
    }
    setEditing(!editing);
  };

  return (
    <li
      className="list-item"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
    >
      <button
        className="undo-complete-button"
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isCompleted ? "Undo" : "Complete"}
      </button>
      {editing ? (
        <input
          className="edit-todo"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p className="todo">{todo.text}</p>
      )}
      <button className="save-edit-button" onClick={handleEdit}>
        {editing ? "Save" : "Edit"}
      </button>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
