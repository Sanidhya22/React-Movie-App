import * as React from "react";
import { Component } from "react";
import "./DynamicButton.scss";
type props = {
  styleClass: string;
  btnName: string;
  btnFunction: React.MouseEventHandler<HTMLButtonElement>;
};
const DynamicButton: React.FC<props> = (props) => {
  const { styleClass, btnName, btnFunction } = props;
  return (
    <div className={styleClass}>
      <button onClick={btnFunction}>{btnName}</button>
    </div>
  );
};
export default React.memo(DynamicButton);
