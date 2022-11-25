import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./Components/Page/HomePage";

function App() {
  // console.log("Test Husky");
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
