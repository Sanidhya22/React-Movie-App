import React from "react";
import ReactDOM from "react-dom";

import "./Modals.scss";
const Modals = (props: any) => {
  if (!props.open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Container">{props.children}</div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modals;
