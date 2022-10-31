import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Homepage from "./Components/Page/Homepage";

function App() {
  console.log("Test Husky");
  useEffect(() => {
    document.title = `${process.env.REACT_APP_TITLE}`;
  }, []);
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
