import _ from 'lodash';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from 'mdbreact';
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
            <MDBCol key={`col-${m._id}`}>
              <MovieCard key={`card-${m._id}`} {...m} />
            </MDBCol>
          ))}
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5">
              <MDBPageItem disabled>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              <MDBPageItem active>
                <MDBPageNav>
                  1 <span className="sr-only">(current)</span>
                </MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>2</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>3</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
      </styles.MDBContainerS>
    </>
  );
};

export default MovieGrid;
