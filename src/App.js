import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    document.title = "Welcome " + name;
  });

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

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button type="Submit">Show</button>
      </form>
    </div>
  );
}

export default App;
