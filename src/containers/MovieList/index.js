import React from "react";
import { MovieCard } from "../../components";
import './list.css'

const MovieList = ({ movies }) => {
    return (
        <>
            <h1 id="lead">Popular Movies</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly"
                }}
            >
                {movies.results.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default MovieList;
