import * as React from "react";
import { Component } from "react";
import Footer from "../Footer/Footer";
import Movielistheader from "../Header/Movielistheader";
import MovieList from "../MovieList/Movielist";

import NavContaner from "../Navbar/NavContainer";

import "./Homepage.css";

const Homepage = () => {
  console.log("Huskey Check");
  return (
    <div className="homepage">
      <NavContaner />
      <MovieList />
      <Footer />
    </div>
  );
};

export default Homepage;
