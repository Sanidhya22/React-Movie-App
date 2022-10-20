import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Sampleclass from "./Sampleclass";
import Homepage from "./Components/Page/Homepage";

function App() {
  console.log("Test Husky");
  return (
    <div className="App">
      <Homepage />
      <Sampleclass />
    </div>
  );
}

export default App;
