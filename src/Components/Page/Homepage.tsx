import * as React from "react";
import { Component } from "react";
import Footer from "../Footer/Footer";
import Movielist from "../MovieList/movieList";
import NavContaner from "../Navbar/navContaner";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <NavContaner />
      <Movielist />
      <Footer />
    </div>
  );
};

export default Homepage;
