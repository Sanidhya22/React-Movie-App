import * as React from "react";
import Movielistheader from "../Header/MovielistHeader";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import { Movie } from "../../types/Types";
import Modals from "../Modals/Modals";
import MovieEditModal from "../FormsModal/MovieEditModal";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/RootReducer";
import * as consts from "../../constants/Constants";
const MovieList: React.FC = () => {
  const Popup = useSelector((state: AppState) => state.Popup);
  const Movies = useSelector((state: AppState) => state.Movies.movies);
  const MovieList = Movies.map((movie: Movie) => {
    return <MovieCard movie={movie} key={movie.id} />;
  });
  return (
    <div className="Movielist">
      <Movielistheader />
      <p className="movie-count">{Movies.length} movies found</p>
      <div className="movies">{MovieList}</div>
      <Modals>
        {Popup.ModalType === consts.movie.modal.DELETE_MODAL ? (
          <DeleteModal />
        ) : null}
        {Popup.ModalType === consts.movie.modal.FORM_MODAL ? (
          <MovieEditModal />
        ) : null}
      </Modals>
    </div>
  );
};
export default React.memo(MovieList);
