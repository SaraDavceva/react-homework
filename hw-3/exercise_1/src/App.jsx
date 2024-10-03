import React from "react";
import "./App.css";
import ParentComponent from "./components/parent";

const family = {
  name: "John (Parent)",
  children: [
    {
      name: "Alex (Child)",
      age: 30,
      grandchildren: [
        { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
        { name: "Sophia (Grandchild)", hobby: "Drawing" },
      ],
    },
    {
      name: "Emma (Child)",
      age: 28,
      grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
    },
  ],
};

const App = () => {
  return (
    <div>
      <h1>Family Tree</h1>
      <ParentComponent family={family} />
    </div>
  );
};

export default App;
