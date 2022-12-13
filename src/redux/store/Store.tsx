import RootReducer from "../reducers/RootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = compose;
const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default Store;
