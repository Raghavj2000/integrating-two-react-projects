# integrating-two-react-projects

HOW TO IMPORT A REACT PROJECT INSIDE ANOTHER REACT PROJECT 

 

Prerequisites: - NodeJS (View Documentation) 

Installation: -  

Step:1 

Creating two React Apps: 

We can create react app by using the following command: 

npx create-react-app {project_name} 

Step:2 

Modifying the first React App: 

We do the following code changes in the first created react application in the index.js file present in the src directory. 

import React from "react"; 

import ReactDOM from "react-dom/client"; 

import "./index.css"; 

import App from "./App"; 

 

window.renderReact = (rootID) => { 

  const root = ReactDOM.createRoot(document.getElementById(rootID)); 

  root.render( 

    <React.StrictMode> 

      <App /> 

    </React.StrictMode> 

  ); 

}; 

Step:3 

Modifying the App.js file: 

We Add the following code, in this code we have used simple counter as example. 

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

Step:4 

Creating a build and hosting it in Netlify: 

We can Create a build of the created app by using the following command: 

npm run build 

 

Netlify offers free website hosting, we can host the website by drag and drop of the build folder of the react app, and the deployed link should look something like this, 

https://polite-hummingbird-c78256.netlify.app 

 

Step:5 

Modifying the second react app:  

We need to edit the index.html in the public folder, we need to add the script src URL of the hosted react app, typically we need to add the javascript chunk of the hosted react app: 

 

 

<body> 

<div id=”root”> 

<script src="https://65c3615bc5e60e0d2c14462e--polite-hummingbird-c78256.netlify.app/static/js/main.80231297.js"></script> 

<body/> 

 

 

 

Step 6: 

Modifying the App.js file to add functionality: 

We modify the app.js file such a way that it imports the hosted react app and add additional interactivity with it. 

 

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

 

 

Step:6 

Either host the second react app or view it locally: 

We can view the react app locally or host it. 

 

View and Download Files from here. 
