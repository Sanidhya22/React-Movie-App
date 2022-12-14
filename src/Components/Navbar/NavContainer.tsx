import * as React from "react";
import { Component } from "react";
import { useDispatch } from "react-redux";
import { SetModal } from "../../redux/actions/MovieAction";
import { Dispatch } from "../../redux/reducers/RootReducer";
import DynamicButton from "../Buttons/DynamicBtn";
import Searchform from "../Form/searchForm";
import Logo from "../Logo/Logo";
import "./NavContaner.scss";
import * as consts from "../../constants/Constants";
const NavContaner: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(SetModal({}, consts.movie.modal.FORM_MODAL));
  };
  const buttonclicked = () => {
    console.log("Search");
  };
  return (
    <>
      <div className="Nav-bg"> </div>
      <div className="Nav-contaner">
        <Logo />
        <DynamicButton
          styleClass={"Add-btn"}
          btnName={"+ Add Movie"}
          btnFunction={HandleClick}
        />
        <Searchform btnFunction={buttonclicked} />
      </div>
    </>
  );
};

export default React.memo(NavContaner);
