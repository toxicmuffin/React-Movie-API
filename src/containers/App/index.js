import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, MovieDetails } from '../';

import './app.css';

function App() {
  const [movies, setMovies] = useState(null);
  const key = '[API KEY]';
  const fetchMovies = async () => {
    // url includes API key that can be received from https://developers.themoviedb.org/3/getting-started/introduction
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={key}`;
    await fetch(url)
      .then(response => response.json())
      .then(json => setMovies(json));
  };
  useEffect(() => {
    // fetch movies and set them to state on "mount"
    fetchMovies();
  }, []);
  return (
    movies && (
      <div className="canvas">
        <BrowserRouter>
          <div className="wrapper">
            <Route exact path="/">
              <MovieList movies={movies} />
            </Route>
            <Route path="/:id">
              <MovieDetails movies={movies} />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    )
  );
};


export default App;
