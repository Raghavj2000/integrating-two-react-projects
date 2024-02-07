// Local React Project
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    function handleCustomEvent(event) {
      console.log("Received message:", event.detail);
      console.log("event", event);
      setText(event.detail);
    }

    window.addEventListener("helloEvent", handleCustomEvent);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("helloEvent", handleCustomEvent);
    };
  }, []);
  const [text, setText] = useState("");
  const handleAdd = () => {
    const event = new CustomEvent("addEvent", {
      detail: 1,
    });
    window.dispatchEvent(event);
  };
  const subtracthandle = () => {
    const event = new CustomEvent("subtractEvent", {
      detail: 1,
    });
    window.dispatchEvent(event);
  };
  useEffect(() => {
    window.renderReact("react_root");
  }, []);

  return (
    <>
      <div className="react_app">
        <div id="react_root"></div>
        <div className="lol">
          <h1>This is React Project 2("Parent")</h1>

          <button onClick={handleAdd}>Add</button>
          <button onClick={subtracthandle}>Minus</button>
          <h1>Text added- {text}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
