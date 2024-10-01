import React from "react";
import Task from "./task";
import "./task.css";

const ListItem = ({ items }) => {
  return (
    <div className="task-list">
      <ul>
        {items.map((item, index) => (
          <Task key={index} name={item.name} priority={item.priority} />
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
