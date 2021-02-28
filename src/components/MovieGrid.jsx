import _ from 'lodash';
import { MDBRow } from 'mdbreact';
import React from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesByCategoryID, getMovies } from '../services/movies';
import MovieCard from './MovieCard';
import styles from './MovieCardnGrid.styles';

const MovieGrid = () => {
  const params = useParams();
  const cid = _.get(params, 'cid');
  const movies = _.isUndefined(cid) ? getMovies() : getMoviesByCategoryID(cid);

  console.debug('MovieGrid params:', params);

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

export default MovieGrid;
