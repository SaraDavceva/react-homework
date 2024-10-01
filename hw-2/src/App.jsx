import React from "react";
import "./App.css";
import ListItem from "./components/listItem";

const tasks = [
  { name: "Learn React", priority: "High" },
  { name: "Do Groceries", priority: "Low" },
  { name: "Exercise", priority: "High" },
  { name: "Read a Book", priority: "Medium" },
];
function App() {
  return (
    <div>
      <h2>Priority List</h2>
      <ListItem items={tasks} />
    </div>
  );
}

export default App;
