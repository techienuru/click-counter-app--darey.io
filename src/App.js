// Click Counter App
// Project Objectives:
// 1. Create a simple click counter app using React JS.
// 2. Set up Counter Component; use useState hook to manage the count state.
// 3. Add a functional Increase and Decrease button.
// 4. Handle edge cases; Preventing the count from going below 0.
// 5. Display a message when the count reaches a certain threshold (e.g "You have reached the limit").

import { useState } from "react";
import "./App.css";
import Button from "./components/button";

function App() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    if (count >= 20) {
      alert("You have reached the limit");
      return;
    }
    count++;
    setCount(count);
  }

  function decreaseCount() {
    if (count <= 0) {
      alert("Count cannot go below 0");
      return;
    }
    count--;
    setCount(count);
  }

  return (
    <div className="App">
      <main>
        <h1>Click Counter App</h1>
        <div className="button-container">
          <Button title="Increase" onclick={increaseCount} type="increase" />
          <p className="count-display">{count}</p>
          <Button title="Decrease" onclick={decreaseCount} type="decrease" />
        </div>
      </main>
    </div>
  );
}

export default App;
