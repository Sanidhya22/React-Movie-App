import * as React from "react";
import { Component } from "react";
import Movielistheader from "../Header/Movielistheader";
import "./movieList.scss";
const Movielist = () => {
  return (
    <div className="Movielist">
      <Movielistheader />
    </div>
  );
};

export default React.memo(Movielist);
