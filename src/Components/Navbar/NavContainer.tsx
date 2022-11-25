import * as React from "react";
import { Component } from "react";
import DynamicButton from "../Buttons/DynamicButton";
import Searchform from "../Form/SearchForm";
import Logo from "../Logo/Logo";
import "./NavContaner.scss";

const Navcontaner = () => {
  const buttonclicked = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Button cicked");
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
