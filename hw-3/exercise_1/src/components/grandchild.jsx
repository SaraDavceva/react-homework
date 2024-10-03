import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import "./grandchild.css";

const GrandchildComponent = ({ grandchild }) => {
  return (
    <div>
      <p>
        <i class="bi bi-circle"></i> &nbsp; Name: {grandchild.name}, Hobby:{" "}
        {grandchild.hobby}
      </p>
    </div>
  );
};

export default GrandchildComponent;
