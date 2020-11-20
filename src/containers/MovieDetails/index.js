import React from "react";
import { withRouter, Link, useParams } from "react-router-dom";
import './details.css';

const MovieDetails = props => {
  // declaring variables
  
  const { id } = useParams();
  let someMovies = props.movies.results;

  let movie = someMovies.find(function (element) {
    let found = element.id;
    let fish = Number(id);
    return found === fish;
  });

  return (
    <div id="backDrop" style={{ paddingBottom: "20px", backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
      <div className="cheating" />
      <div id="notwrapper">
        <img
          src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
          alt={`${movie.title}`}
          style={{ width: "154px", height: "215px" }}
        />
        <h1>{movie.title}</h1>
        <h1>{movie.vote_average}</h1>
        <p>{movie.overview}</p>
        <Link to="/">&lt;-Back-</Link>
      </div>

    </div>
  )
}

export default withRouter(MovieDetails);
