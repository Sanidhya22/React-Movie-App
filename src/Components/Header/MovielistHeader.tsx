import * as React from "react";
import { Component } from "react";
import Genrelist from "./Genrelist/GenreList";

import "./MovielistHeader.scss";
import Sortdrop from "./SortbyDrop/SortDrop";

const Movielistheader: React.FC = () => {
  return (
    <div className="Movielistheader">
      <Genrelist />
      <Sortdrop />
    </div>
  );
};

export default Movielistheader;
