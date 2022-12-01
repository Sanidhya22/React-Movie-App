import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./Page/HomePage";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{process.env.REACT_APP_TITLE}</title>
      </Helmet>
      <Homepage />
    </div>
  );
}

export default App;
