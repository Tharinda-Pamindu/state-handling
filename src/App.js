import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Counter : {count}</h2>
        <div>
          <button type="button" onClick={increaseCounter}>
            Increase
          </button>
          <button type="button" onClick={decreaseCount}>
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
