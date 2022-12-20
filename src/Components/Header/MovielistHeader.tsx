import * as React from "react";
import { Component } from "react";
import GenreList from "./Genrelist/Genrelist";

import "./MovielistHeader.scss";
import SortDrop from "./SortbyDrop/Sortdrop";

const MovieListHeader: React.FC = () => {
  return (
    <div className="Movielistheader">
      <GenreList />
      <SortDrop />
    </div>
  );
};

export default MovieListHeader;
