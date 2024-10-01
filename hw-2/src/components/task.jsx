import React from "react";
import "./task.css";
const Task = ({ name, priority }) => {
  return (
    <div className="task">
      <li className={`task-item ${priority.toLowerCase()}`}>
        <p className="name">{name}</p>
        <p className="priorty">{priority}</p>
      </li>
    </div>
  );
};

export default Task;
