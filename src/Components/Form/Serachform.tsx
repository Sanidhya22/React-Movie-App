import * as React from "react";
import { Component } from "react";
import Searchbutton from "../Buttons/Search/Searchbutton";
import Searchinput from "../Input/Search/Searchinput";

import "./Searchform.scss";
const Searchform = () => {
  return (
    <div className="Search">
      <h2>FIND YOUR MOVIE</h2>
      <div className="FORM">
        <Searchinput />
        <Searchbutton />
      </div>
    </div>
  );
};

export default Searchform;
