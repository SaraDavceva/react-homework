import { useEffect, useState } from "react";
import "./dynamicCounter.css";
const DynamicCounter = () => {
  const [count, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#F5F5DC");

  useEffect(() => {
    if (count > 0) {
      setBackgroundColor("#0af211");
    } else if (count < 0) {
      setBackgroundColor("#fa0707");
    } else {
      setBackgroundColor("#F5F5DC");
    }
  }, [count]);

  const incrementCounter = () => {
    setCounter(count + 1);
  };

  const decrementCounter = () => {
    setCounter(count - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="counter" style={{ backgroundColor: backgroundColor }}>
      <h1>{count}</h1>
      <div className="buttons">
        <button className="increment-button" onClick={incrementCounter}>
          Increment
        </button>
        <button className="decrement-button" onClick={decrementCounter}>
          Decrement
        </button>
      </div>
      <button className="reset-button" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
};

export default DynamicCounter;
