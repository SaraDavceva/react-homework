import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import "./child.css";
import Grandchild from "./grandchild";

const ChildComponent = ({ child }) => {
  return (
    <div>
      <h3>
        <i class="bi bi-circle-fill"></i>
        &nbsp; Name: {child.name}, Age: {child.age}
      </h3>
      <div>
        {child.grandchildren.map((grandchild, index) => (
          <Grandchild key={index} grandchild={grandchild} />
        ))}
      </div>
    </div>
  );
};

export default ChildComponent;
