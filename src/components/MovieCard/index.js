import React from "react";
import { Link } from "react-router-dom";

import { Card } from "../";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ margin: "1em" }}>
      <Link
        to={`/${movie.id}`}
        style={{
          textDecoration: "none",
          color: "#2f2f2f",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
          alt={`${movie.title}`}
          style={{ width: "154px", height: "215px" }}
        />
      </Link>
    </Card>
  );
};

export default MovieCard;
