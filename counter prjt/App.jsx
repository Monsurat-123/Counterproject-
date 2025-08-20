import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  const LIMIT = 10;

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>

      <div style={{ margin: "20px" }}>
        <button onClick={handleDecrease} style={{ marginRight: "10px" }}>
          Decrease
        </button>

        <span style={{ fontSize: "24px", margin: "0 20px" }}>{count}</span>

        <button onClick={handleIncrease} style={{ marginLeft: "10px" }}>
          Increase
        </button>
      </div>

      {count >= LIMIT && (
        <p style={{ color: "red" }}>You've reached the limit!</p>
      )}
    </div>
  );
}
