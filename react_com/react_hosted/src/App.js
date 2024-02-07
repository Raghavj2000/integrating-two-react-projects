import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function addCount(value) {
    setCount(count + value);
  }
  function subtractCount(value) {
    setCount(count - value);
  }
  function handleClick() {
    const event = new CustomEvent("helloEvent", {
      detail: "hello world",
    });
    window.dispatchEvent(event);
  }

  useEffect(() => {
    window.addEventListener("addEvent", (e) => {
      setCount(count + e.detail);
    });
    window.addEventListener("subtractEvent", (e) => {
      setCount(count - e.detail);
    });
  }, [count]);

  return (
    <div className="App">
      <h1>This is React Project 1.("Child")</h1>
      <h2>Counter:{count}</h2>
      <button onClick={handleClick}>
        This button to add text in localhost react
      </button>
    </div>
  );
}

export default App;
