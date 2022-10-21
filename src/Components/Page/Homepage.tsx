import * as React from "react";
import { Component } from "react";
import Footer from "../Footer/Footer";
import Movielist from "../MovieList/Movielist";
import Navcontaner from "../Navbar/Navcontaner";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navcontaner />
      <Movielist />
      <Footer />
    </div>
  );
};

export default Homepage;
