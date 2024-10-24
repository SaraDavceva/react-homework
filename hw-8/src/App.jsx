import "./App.css";
import AddTodo from "./components/addTodo/addTodo";
import TodoList from "./components/todoList/todoList";
import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
