import * as React from "react";
import { Component } from "react";
import "./SortDrop.scss";
const Sortdrop = () => {
  return (
    <div className="Sortdrop">
      <label className="Lable">Sort By</label>
      <select className="Select">
        <option value="Releasedate">Release date</option>
        <option value="Rating">Rating</option>
      </select>
    </div>
  );
};
export default Sortdrop;
