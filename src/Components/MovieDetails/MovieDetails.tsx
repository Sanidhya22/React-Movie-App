import React from "react";
import "./MovieDetails.scss";
import { TypeMovie } from "../Types/Types";
import * as consts from "../constants/Constants";

const MovieDetails: React.FC<TypeMovie> = (movie) => {
  const {
    id,
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    genres,
    runtime,
  } = movie;

  return (
    <>
      <div className="movie-detail" key={id}>
        <div className="movie-img">
          <img src={poster_path} alt="movie" />
        </div>
        <div className="movie-content">
          <div className="heading-box">
            <h2>{title}</h2>
            <div className="rate-circle">{vote_average}</div>
          </div>
          <p>{genres ? genres.join(", ") : ""}</p>
          <div className="small-detail">
            <div className="year-relesed">
              <span>{release_date ? release_date.slice(0, 4) : ""}</span>{" "}
              {consts.movie.movieDetails.YEAR}
            </div>
            <div className="min-long">
              <span>{runtime ? runtime : 0}</span>{" "}
              {consts.movie.movieDetails.MIN}
            </div>
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
