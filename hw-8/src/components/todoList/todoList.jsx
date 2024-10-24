import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "../todoItem/todoItem";
import "./todoList.css";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>Add some items to the list</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
