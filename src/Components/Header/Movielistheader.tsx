import * as React from "react";
import { Component } from "react";

import Genrelist from "./Genrelist/Genrelist";
import "./Movielistheader.scss";
import Sortdrop from "./SortbyDrop/Sortdrop";
function Movielistheader() {
  return (
    <div className="Movielistheader">
      <Genrelist />
      <Sortdrop />
    </div>
  );
}

export default Movielistheader;
