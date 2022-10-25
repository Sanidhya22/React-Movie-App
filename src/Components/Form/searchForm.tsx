import * as React from "react";
import { Component } from "react";
import DynamicButton from "../Buttons/dynamicButton";
import Searchinput from "../Input/Search/searchInput";

import "./searchForm.scss";
type props = {
  btnFunction: React.MouseEventHandler<HTMLButtonElement>;
};
const Searchform = ({ btnFunction }: props) => {
  return (
    <div className="Search">
      <h2>FIND YOUR MOVIE</h2>
      <div className="Form">
        <Searchinput />
        <DynamicButton
          styleClass={"search-btn"}
          btnName={"Search"}
          btnFunction={btnFunction}
        />
      </div>
    </div>
  );
};

export default Searchform;
