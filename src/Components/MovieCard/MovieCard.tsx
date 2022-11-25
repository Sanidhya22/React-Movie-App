import React from "react";
import "./MovieCard.scss";
import { Movie } from "../MovieList/Movielist";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="movie-item" key={movie.id}>
      {/* <Link to={`/movies/${movie.id}`}>
        // <img src={movie.poster_path} alt="movie-img" />
      </Link> */}
      <img src={movie.poster_path} alt="movie-img" />
      <div className="title-date">
        <h2>{movie.title}</h2>
        <div className="date">{movie.release_date.slice(0, 4)}</div>
      </div>
      <p className="genre">{movie.genres.join(", ")}</p>
    </div>
  );
};

export default MovieCard;
