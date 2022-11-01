import * as React from "react";
import { Component } from "react";
import "./SortDrop.scss";
const Sortdrop = () => {
  return (
    <div className="Sortdrop">
      <label className="Lable">Sort By</label>
      <select className="Select">
        <option value="tesla">Release date</option>
        <option value="volvo">Rating</option>
      </select>
    </div>
  );
};
export default Sortdrop;
