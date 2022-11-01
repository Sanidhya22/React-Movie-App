import * as React from "react";
import Movielistheader from "../Header/MovielisHeader";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
// import * as D from "../MockData/db.json";
export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: [string];
  runtime: number;
}

const Movielist = () => {
  const [Movies, setv] = React.useState<Array<Movie>>([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        setv(data); // new
      });
  }, []);

  // React.useEffect(() => {
  //   console.log(D.data);
  //   console.log(Movies);
  // }, []);

  const movieList = Movies.map((movie: Movie) => {
    return <MovieCard movie={movie} key={movie.id} />;
  });

  return (
    <div className="Movielist">
      <Movielistheader />
      <p className="movie-count">{Movies.length} movies found</p>
      <div className="movies">{movieList}</div>;
    </div>
  );
};

export default React.memo(Movielist);
