import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "../Components/Error Boundry/ErrorBoundry";
import Footer from "../Components/Footer/Footer";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import Movielist from "../Components/MovieList/MovieList";
import NavContaner from "../Components/Navbar/NavContainer";
import { SetMovie } from "../redux/actions/MovieAction";
import { AppState, Dispatch } from "../redux/reducers/RootReducer";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const Popup = useSelector((state: AppState) => state.Popup);
  const dispatch: Dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(SetMovie());
  }, []);
  return (
    <ErrorBoundary>
      <div className="homepage">
        {Popup.ShowMovieDetail ? <MovieDetails /> : <NavContaner />}
        <Movielist />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
