import { ActionType } from "../../types/ActionTypes";
const initialState = {
  Moviedetail: {},
  ModalMovie: {},
  ShowModal: false,
  ShowMovieDetail: false,
  ModalType: "",
};

export const PopupReducers = (
  state = initialState,
  { type, payload = null }: { type: string; payload: any }
) => {
  switch (type) {
    case ActionType.OpenCloseShowMovieDetail:
      return { ...state, ShowMovieDetail: !state.ShowMovieDetail };
    case ActionType.SET_MOTAL:
      return {
        ...state,
        ShowModal: !state.ShowModal,
        ModalMovie: payload.Movie,
        ModalType: payload.Type,
      };
    case ActionType.Moviedetail:
      return { ...state, Moviedetail: payload };
    default:
      return state;
  }
};
