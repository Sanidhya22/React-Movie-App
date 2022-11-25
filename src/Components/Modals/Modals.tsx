import React from "react";
import ReactDOM from "react-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import Editmovieform from "../Forms/Editmovieform";
import { Deletemodalprops, Movie, TypeMovie } from "../Types/Types";
import "./Modals.scss";

type Props = {
  handleDeleteFalse: () => void;
  handleDeleteTrue: () => void;
  movieid: number | null;
  modaltype: string;
};
const Modals: React.FC<Props> = ({
  handleDeleteFalse,
  handleDeleteTrue,
  movieid,
  modaltype,
}) => {
  return ReactDOM.createPortal(
    <div className="Container">
      {modaltype === "deletemodal" && (
        <DeleteModal
          handleDeleteFalse={handleDeleteFalse}
          handleDeleteTrue={handleDeleteTrue}
        />
      )}
      {modaltype === "editmoviemodal" && (
        <Editmovieform
          movieid={movieid}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modals;
