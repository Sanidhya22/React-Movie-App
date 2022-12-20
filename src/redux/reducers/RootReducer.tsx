import { combineReducers } from "redux";
import { MoviesReducer } from "./MoviesReducer";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { PopupReducers } from "./PopupReducer";

const RootReducer = combineReducers({
  Movies: MoviesReducer,
  Popup: PopupReducers,
});
export type AppState = ReturnType<typeof RootReducer>;
export type Dispatch = ThunkDispatch<AppState, void, AnyAction>;

export default RootReducer;
