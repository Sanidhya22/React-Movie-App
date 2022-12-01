import React from "react";
import "./MovieDetails.scss";
import { Movie, TypeMovie } from "../../types/Types";
import * as consts from "../../constants/Constants";
import { BsSearch } from "react-icons/bs";
export interface props {
  closemoviedetail: () => void;
  movie?: Movie;
}

const MovieDetails: React.FC<props> = ({ closemoviedetail, movie }) => {
  return (
    <>
      <BsSearch onClick={closemoviedetail} />
      <div className="movie-detail" key={movie?.id}>
        <div className="movie-img">
          <img src={movie?.poster_path} alt="movie" />
        </div>
        <div className="movie-content">
          <div className="heading-box">
            <h2>{movie?.title}</h2>
            <div className="rate-circle">{movie?.vote_average}</div>
          </div>
          <p className="movie-genere">
            {movie?.genres ? movie?.genres.join(", ") : ""}
          </p>
          <div className="small-detail">
            <div className="year-relesed">
              <span>
                {movie?.release_date ? movie?.release_date.slice(0, 4) : ""}
              </span>{" "}
            </div>
            <div className="min-long">
              <span>{movie?.runtime ? movie?.runtime : 0}</span>{" "}
              {consts.movie.movieDetails.MIN}
            </div>
          </div>
          <p className="movie-overview">{movie?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
