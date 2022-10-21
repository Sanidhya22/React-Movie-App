import * as React from "react";
import { Component } from "react";
import Addmovie from "../Buttons/Add/Addmoviebyn";
import Searchform from "../Form/Serachform";

import Logo from "../Logo/Logo";

import "./Navcontaner.scss";
function Navcontaner() {
  return (
    <>
      <div className="Nav-bg"> </div>
      <div className="Nav-contaner">
        <Logo />
        <Addmovie />
        <Searchform />
      </div>
    </>
  );
}

export default Navcontaner;
