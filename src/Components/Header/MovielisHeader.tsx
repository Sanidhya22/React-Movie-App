import * as React from "react";
import { Component } from "react";
import Genrelist from "./Genrelist/GenreList";

import "./MovielisHeader.scss";
import Sortdrop from "./SortbyDrop/SortDrop";

function Movielistheader() {
  return (
    <div className="Movielistheader">
      <Genrelist />
      <Sortdrop />
    </div>
  );
}

export default Movielistheader;
