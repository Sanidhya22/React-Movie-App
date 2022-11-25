import * as React from "react";
import Movielistheader from "../Header/MovielistHeader";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import { Movie, popup } from "../Types/Types";
import { getallUsers } from "../Api/MovieData";
import Modals from "../Modals/Modals";

const Movielist: React.FC = () => {
  const [Movies, setv] = React.useState<Array<Movie>>([]);
  const [popup, setPopup] = React.useState<popup>({
    show: false, // initial values set to false and null
    id: null,
    modaltype: "",
  });
  const handleDelete = (
    id: number,
    modaltype: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    setPopup({
      show: true,
      id,
      modaltype,
    });
    console.log(id);
  };
  // This will perform the deletion and hide the Confirmation Box
  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      const filteredData = Movies.filter((movie) => movie.id !== popup.id);
      setv(filteredData);
      setPopup({
        show: false,
        id: null,
        modaltype: "",
      });
    }
  };
  // This will just hide the Confirmation Box when user clicks "No"/"Cancel"
  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
      modaltype: "",
    });
  };

  React.useEffect(() => {
    const fetchdata = async () => {
      const response = await getallUsers("data");
      setv(response.data);
      console.log(response);
    };
    fetchdata();
  }, []);

  const movieList = Movies.map((movie: Movie) => {
    return (
      <MovieCard
        movie={movie}
        handleDelete={handleDelete}
        popup={popup}
        key={movie.id}
      />
    );
  });

  return (
    <div className="Movielist">
      <Movielistheader />
      <p className="movie-count">{Movies.length} movies found</p>
      <div className="movies">{movieList}</div>
      {popup.show && (
        <Modals
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
          movieid={popup.id}
          modaltype={popup.modaltype}
        />
      )}
    </div>
  );
};
export default React.memo(Movielist);
