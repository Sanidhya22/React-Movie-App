import React, { useState } from "react";
import "./MovieCard.scss";
import { Movie, Moviecardprops } from "../../types/Types";
import { GoKebabVertical } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../redux/reducers/RootReducer";
import {
  OpenCloseShowMovieDetail,
  SetModal,
  SetMovieDetail,
} from "../../redux/actions/MovieAction";
import * as consts from "../../constants/Constants";

const MovieCard: React.FC<Moviecardprops> = ({ movie }) => {
  const dispatch: Dispatch = useDispatch();
  const HandelMovieDetail = () => {
    dispatch(OpenCloseShowMovieDetail());
    dispatch(SetMovieDetail(movie));
  };
  return (
    <div className="movie-item" key={movie.id}>
      {/* <Link to={`/movies/${movie.id}`}>
        // <img src={movie.poster_path} alt="movie-img" />
      </Link> */}
      <img
        onClick={HandelMovieDetail}
        src={movie.poster_path}
        alt="movie-img"
      />
      <div className="title-date">
        <h2>{movie.title}</h2>
        <div className="date">{movie.release_date.slice(0, 4)}</div>
      </div>
      <p className="genre">{movie.genres.join(", ")}</p>
      <MoviecardToffle moviedata={movie} />
    </div>
  );
};

type Moviecardtoggleprops = {
  moviedata: Movie;
};
const MoviecardToffle: React.FC<Moviecardtoggleprops> = (props) => {
  const [OpenToggle, setOpenToggle] = useState(false);
  const Closetoggle = () => {
    setOpenToggle(!OpenToggle);
  };
  return (
    <div className="Moviecardtoffle">
      {OpenToggle ? (
        <CardtoggleBtn Closetoggle={Closetoggle} data={props.moviedata} />
      ) : (
        <GoKebabVertical
          onClick={() => {
            setOpenToggle(!OpenToggle);
          }}
          className="movie-toggle"
        />
      )}
    </div>
  );
};
type Cardtofflebuttonprops = {
  Closetoggle: () => void;
  data: Movie;
};
const CardtoggleBtn: React.FC<Cardtofflebuttonprops> = (props) => {
  const dispatch: Dispatch = useDispatch();
  const data = props.data;
  const Closetoggle = props.Closetoggle;
  const HandleClick = (movie: Movie, type: string) => {
    dispatch(SetModal(data, type));
  };
  return (
    <>
      <div className="Cardtofflebutton">
        <span onClick={() => HandleClick(data, consts.movie.modal.FORM_MODAL)}>
          Edit
        </span>
        <span
          onClick={() => HandleClick(data, consts.movie.modal.DELETE_MODAL)}
        >
          Delete
        </span>
        <GrClose className="close" size={20} onClick={Closetoggle} />
      </div>
    </>
  );
};

export default MovieCard;
