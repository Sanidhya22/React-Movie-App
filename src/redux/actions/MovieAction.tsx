import { getallUsers } from "../../Api";
import { ActionType } from "../../types/ActionTypes";
import { Dispatch } from "../reducers/RootReducer";

export const SetMovie = () => async (dispatch: Dispatch) => {
  const response = await getallUsers("data");
  dispatch({
    type: ActionType.SET_MOVIES,
    payload: response.data,
  });
};
export const DeleteMovie = (data: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SET_MOVIES,
    payload: data,
  });
};
export const OpenCloseShowMovieDetail = () => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.OpenCloseShowMovieDetail,
  });
};
export const SetMovieDetail = (Movie: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.Moviedetail,
    payload: Movie,
  });
};
export const SetModal =
  (Movie: any, ModalType: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SET_MOTAL,
      payload: { Movie: Movie, Type: ModalType },
    });
  };
