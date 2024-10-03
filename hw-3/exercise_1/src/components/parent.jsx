import React from "react";
import ChildComponent from "./child";

const ParentComponent = ({ family }) => {
  return (
    <div>
      <h2>Name: {family.name}</h2>
      <div>
        {family.children.map((child, index) => (
          <ChildComponent key={index} child={child} />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
