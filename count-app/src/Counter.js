import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="card">
      <h2>Counter App</h2>

      <h1>{count}</h1>

      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
}

export default Counter;