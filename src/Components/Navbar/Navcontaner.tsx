import * as React from "react";
import { Component } from "react";
import DynamicButton from "../Buttons/dynamicButton";
import Searchform from "../Form/searchForm";
import Logo from "../Logo/Logo";
import "./navContaner.scss";

const Navcontaner = () => {
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
};

export default React.memo(Navcontaner);
