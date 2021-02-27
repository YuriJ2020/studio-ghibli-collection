import _ from 'lodash';
import { MDBRow } from 'mdbreact';
import React from 'react';

import { getMovies } from '../services/movies';
import MovieCard from './MovieCard';
import styles from './MovieCardnGrid.styles';

export default () => {
  const movies = getMovies();

  return (
    <>
      <styles.MDBContainerS className="mx-auto text-center">
        <MDBRow>
          {_.map(movies, (m) => (
            <MovieCard key={m._id} {...m} />
          ))}
        </MDBRow>
      </styles.MDBContainerS>
    </>
  );
};
