import React from "react";
import "./MovieDetails.scss";
import * as consts from "../../constants/Constants";
import { BsSearch } from "react-icons/bs";
import Logo from "../Logo/Logo";
import { AppState } from "../../redux/reducers/RootReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  OpenCloseShowMovieDetail,
  SetMovieDetail,
} from "../../redux/actions/MovieAction";
import { Dispatch } from "../../redux/reducers/RootReducer";

const MovieDetails: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const movie = useSelector((state: AppState) => state.Popup.Moviedetail);
  const HandelClose = () => {
    dispatch(OpenCloseShowMovieDetail());
    dispatch(SetMovieDetail({}));
  };
  return (
    <>
      <div className="movie-detail" key={movie?.id}>
        <div className="top">
          <Logo />
          <BsSearch className="search" size={30} onClick={HandelClose} />
        </div>
        <div className="movie-info">
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
                <span>
                  {movie?.runtime ? movie?.runtime : 0}
                  {consts.movie.movieDetails.MIN}
                </span>{" "}
              </div>
            </div>
            <p className="movie-overview">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
