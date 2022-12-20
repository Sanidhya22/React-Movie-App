import React, { ReactText } from "react";
import DynamicButton from "../Buttons/DynamicBtn";
import "./DeleteModal.scss";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { AppState, Dispatch } from "../../redux/reducers/RootReducer";
import { DeleteMovie, SetModal } from "../../redux/actions/MovieAction";

const DeleteModal: React.FC = () => {
  const Movies = useSelector((state: AppState) => state.Movies.movies);
  const Movie = useSelector((state: AppState) => state.Popup.ModalMovie);
  const dispatch: Dispatch = useDispatch();
  const HandelClose = () => {
    dispatch(SetModal({}, ""));
  };
  const HandelDelete = () => {
    const filteredData = Movies.filter((movie: any) => movie.id !== Movie.id);
    dispatch(DeleteMovie(filteredData));
    dispatch(SetModal({}, ""));
  };
  return (
    <div className="DeleteModalContaner">
      <div className="Closemodal">
        {" "}
        <GrClose className="close" onClick={HandelClose} />
      </div>

      <p>DELETE MOVIE</p>
      <p>Are you sure you want to delete this movie</p>
      <DynamicButton
        styleClass={"search-btn"}
        btnName={"Confirm"}
        btnFunction={HandelDelete}
      />
    </div>
  );
};
export default React.memo(DeleteModal);
