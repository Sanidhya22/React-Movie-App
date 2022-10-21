import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Sampleclass from "./Sampleclass";
import Homepage from "./Components/Page/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Sampleclass/>
    </div>
  );
}

export default App;
