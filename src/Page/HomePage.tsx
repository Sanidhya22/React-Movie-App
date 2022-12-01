import * as React from "react";
import ErrorBoundary from "../Components/Error Boundry/ErrorBoundry";
import Footer from "../Components/Footer/Footer";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import Movielist from "../Components/MovieList/MovieList";
import NavContaner from "../Components/Navbar/NavContainer";
import { Movie } from "../types/Types";
import "./HomePage.css";

type state = {
  show: boolean;
  movie?: Movie;
};
const HomePage: React.FC = () => {
  const [Shoemoviedetail, setShoemoviedetail] = React.useState<state>({
    show: false,
    movie: undefined,
  });
  const Openmoviedetail = (movie: Movie) => {
    setShoemoviedetail({
      show: true,
      movie,
    });
  };
  const closemoviedetail = () => {
    setShoemoviedetail({
      show: false,
      movie: undefined,
    });
  };
  return (
    <ErrorBoundary>
      <div className="homepage">
        {Shoemoviedetail.show ? (
          <MovieDetails
            closemoviedetail={closemoviedetail}
            movie={Shoemoviedetail.movie}
          />
        ) : (
          <NavContaner />
        )}
        <Movielist Openmoviedetail={Openmoviedetail} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
