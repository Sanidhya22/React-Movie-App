import React, { ReactText } from "react";
import DynamicButton from "../Buttons/DynamicBtn";
import { Deletemodalprops } from "../../types/Types";
import "./DeleteModal.scss";
import { GrClose } from "react-icons/gr";
const DeleteModal: React.FC<Deletemodalprops> = ({
  handleDeleteTrue,
  handleDeleteFalse,
}) => {
  return (
    <div className="DeleteModalContaner">
      <div className="Closemodal">
        {" "}
        <GrClose className="close" onClick={handleDeleteFalse} />
      </div>

      <p>DELETE MOVIE</p>
      <p>Are you sure you want to delete this movie</p>
      <DynamicButton
        styleClass={"search-btn"}
        btnName={"Confirm"}
        btnFunction={handleDeleteTrue}
      />
    </div>
  );
};
export default React.memo(DeleteModal);
