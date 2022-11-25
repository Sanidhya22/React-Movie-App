import * as React from "react";
import { Component } from "react";
import Registration from "../../AddmovieForm/AddMovie";
import ErrorBoundary from "../Error Boundry/ErrorBoundry";
import Footer from "../Footer/Footer";
import Editmovieform from "../Forms/Editmovieform";
import Modals from "../Modals/Modals";
import MovieDetails from "../MovieDetails/MovieDetails";
import MovieList from "../MovieList/Movielist";
import NavContaner from "../Navbar/NavContainer";
import "./HomePage.css";

const Homepage: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="homepage">
        {/* {Shoemoviedetail ? <MovieDetails> : } */}
        <NavContaner />
        <MovieList />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Homepage;
