import React from "react";
import { data } from "../data";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("updating");
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log(store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourite</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
