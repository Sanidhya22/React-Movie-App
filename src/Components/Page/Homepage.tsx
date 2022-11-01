import * as React from "react";
import { Component } from "react";
import ErrorBoundary from "../Error Boundry/ErrorBoundry";
import Footer from "../Footer/Footer";
import MovieList from "../MovieList/Movielist";
import NavContaner from "../Navbar/NavContainer";
import "./HomePage.css";

const Homepage = () => {
  console.log("Huskey Check");
  return (
    <ErrorBoundary>
      <div className="homepage">
        <NavContaner />
        <MovieList />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Homepage;
