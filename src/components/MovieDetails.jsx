import _ from 'lodash';
import { Redirect, useParams } from 'react-router-dom';
import React from 'react';

import { getMovieByID } from '../services/movies';

const MovieDetails = () => {
  const params = useParams();
  const mid = _.get(params, 'mid');
  const movie = getMovieByID(mid);

  return (
    <>
      {_.isUndefined(movie) ? (
        <Redirect to="/notfound" />
      ) : (
        <div>
          <img src={movie.img} />
          <p>Title: {movie.title}</p>
          <p>Category: {movie.category.name}</p>
          <p>Release Year: {movie.released}</p>
          <p>Description: {movie.description}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
