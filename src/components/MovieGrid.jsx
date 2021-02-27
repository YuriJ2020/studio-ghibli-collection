import React from "react";
import _ from "lodash";

import MovieCard from "./MovieCard";

import { getMovies } from "../services/movies";

export default () => {
  const movies = getMovies();

  return (
    <>
      <ul>
        {_.map(movies, (m) => (
          <MovieCard key={m._id} {...m} />
        ))}
      </ul>
    </>
  );
};
