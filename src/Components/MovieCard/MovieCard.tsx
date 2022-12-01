import React, { useState } from "react";
import "./MovieCard.scss";
import { Movie, Moviecardprops } from "../../types/Types";
import { GoKebabVertical } from "react-icons/go";
import { GrClose } from "react-icons/gr";
const MovieCard: React.FC<Moviecardprops> = ({
  movie,
  handleDelete,
  Openmoviedetail,
}) => {
  return (
    <div className="movie-item" key={movie.id}>
      {/* <Link to={`/movies/${movie.id}`}>
        // <img src={movie.poster_path} alt="movie-img" />
      </Link> */}
      <img
        onClick={(e) => {
          Openmoviedetail(movie, e);
        }}
        src={movie.poster_path}
        alt="movie-img"
      />
      <div className="title-date">
        <h2>{movie.title}</h2>
        <div className="date">{movie.release_date.slice(0, 4)}</div>
      </div>
      <p className="genre">{movie.genres.join(", ")}</p>
      <MoviecardToffle moviedata={movie} handledelete={handleDelete} />
    </div>
  );
};

type Moviecardtoggleprops = {
  moviedata: Movie;
  handledelete: (
    id: number,
    modaltype: string,
    event: React.MouseEvent<HTMLElement>
  ) => void;
};
const MoviecardToffle: React.FC<Moviecardtoggleprops> = (props) => {
  const [OpenToggle, setOpenToggle] = useState(false);
  const Closetoggle = () => {
    setOpenToggle(!OpenToggle);
  };
  return (
    <div className="Moviecardtoffle">
      {OpenToggle ? (
        <CardtoggleBtn
          Closetoggle={Closetoggle}
          data={props.moviedata}
          handledelete={props.handledelete}
        />
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

export interface Cardtofflebuttonprops {
  Closetoggle: () => void;
  data: Movie;
  handledelete: (
    id: number,
    modaltype: string,
    event: React.MouseEvent<HTMLElement>
  ) => void;
}
const CardtoggleBtn: React.FC<Cardtofflebuttonprops> = (props) => {
  console.log(props);
  const data = props.data;
  const Closetoggle = props.Closetoggle;
  const handledelete = props.handledelete;
  return (
    <div className="Cardtofflebutton">
      <span
        onClick={(e) => {
          handledelete(data.id, "editmoviemodal", e);
        }}
      >
        Edit
      </span>
      <span
        onClick={(e) => {
          handledelete(data.id, "deletemodal", e);
        }}
      >
        Delete
      </span>
      <GrClose className="close" size={20} onClick={Closetoggle} />
    </div>
  );
};

export default MovieCard;
