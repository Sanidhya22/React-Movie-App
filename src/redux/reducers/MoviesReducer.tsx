import { ActionType } from "../../types/ActionTypes";

const initialState = {
  movies: [],
};

export const MoviesReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case ActionType.SET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
