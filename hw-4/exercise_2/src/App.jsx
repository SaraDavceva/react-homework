import { useState } from "react";
import "./App.css";
import RandocUserFetcher from "./components/randomUserFetcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RandocUserFetcher />
    </div>
  );
}

export default App;
