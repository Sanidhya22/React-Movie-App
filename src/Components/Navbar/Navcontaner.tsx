import * as React from "react";
import { Component } from "react";
import DynamicButton from "../Buttons/dynamicButton";
import Addmovie from "../Buttons/dynamicButton";
import Searchform from "../Form/Serachform";

import Logo from "../Logo/Logo";

import "./Navcontaner.scss";
function Navcontaner() {
  const buttonclicked = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Button Clicked");
  };
  return (
    <>
      <div className="Nav-bg"> </div>
      <div className="Nav-contaner">
        <Logo />
        <DynamicButton
          styleClass={"Add-btn"}
          btnName={"+ Add Movie"}
          btnFunction={buttonclicked}
        />
        <Searchform btnFunction={buttonclicked} />
      </div>
    </>
  );
}

export default Navcontaner;
