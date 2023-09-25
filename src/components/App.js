import React from "react";
import { data } from "../data";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));

    console.log(store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourities } = movies;
    const i = favourities.indexOf(movie);
    if (i === -1) {
      return false; //not fav
    }
    return true; //is fav
  };

  change = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  };

  render() {
    const { movies } = this.props.store.getState();
    const { list, favourities, showFavourites } = movies;
    console.log(this.props.store.getState());

    const displayMovie = showFavourites ? favourities : list;
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.change(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.change(true)}
            >
              Favourite
            </div>
          </div>

          <div className="list">
            {displayMovie.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovie.length === 0 ? (
            <div className="no-movies">No movies to display</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
