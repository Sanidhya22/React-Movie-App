import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/RootReducer";

import "./Modals.scss";
const Modals = (props: any) => {
  const Popup = useSelector((state: AppState) => state.Popup);
  if (!Popup.ShowModal) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Container">{props.children}</div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modals;
