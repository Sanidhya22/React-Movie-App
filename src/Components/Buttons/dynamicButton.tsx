import * as React from "react";
import { Component } from "react";
import "./DynamicButton.scss";
type props = {
  styleClass: string;
  btnName: string;
  btnFunction: React.MouseEventHandler<HTMLButtonElement>;
};
const dynamicButton = ({ styleClass, btnName, btnFunction }: props) => {
  // console.log(btnFunction);

  return (
    <div className={styleClass}>
      <button onClick={btnFunction}>{btnName}</button>
    </div>
  );
};
export default React.memo(dynamicButton);
