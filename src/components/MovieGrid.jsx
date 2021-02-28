import _ from 'lodash';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from 'mdbreact';
import { useLocation, useParams } from 'react-router-dom';
import React from 'react';

import { constants } from '../constants';
import { getMoviesByCategoryID, getMovies } from '../services/movies';
import MovieCard from './MovieCard';
import styles from './MovieCardnGrid.styles';

const MovieGrid = () => {
  const params = useParams();
  const search = useLocation().search;
  const cid = _.get(params, 'cid');
  const page = _.toNumber(new URLSearchParams(search).get('page'));

  const moviesAll = _.isUndefined(cid) ? getMovies() : getMoviesByCategoryID(cid);
  const moviesPaginated = _.isNaN(page)
    ? []
    : page === 0
    ? moviesAll
    : _.slice(moviesAll, constants.itemsPerPage * (page - 1), constants.itemsPerPage * page);
  const pages = _.isNaN(page) || page === 0 ? 0 : _.ceil(moviesAll.length / constants.itemsPerPage);

  console.debug('MovieGrid params:', params);

  return (
    <>
      <styles.MDBContainerS className="mx-auto text-center">
        <MDBRow>
          {_.map(moviesPaginated, (m) => (
            <MDBCol key={`col-${m._id}`} lg="4" md="6" className="justify-content-center">
              <MovieCard key={`card-${m._id}`} {...m} />
            </MDBCol>
          ))}
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5 justify-content-center">
              {pages > 0 && (
                <MDBPageItem disabled={page === 1}>
                  <MDBPageNav
                    aria-label="Previous"
                    {...(page > 1 && { href: `?page=${page - 1}` })}
                  >
                    <span aria-hidden="true">Previous</span>
                  </MDBPageNav>
                </MDBPageItem>
              )}

              {_.range(1, pages + 1).map((p) => (
                <MDBPageItem key={p} active={p === page}>
                  <MDBPageNav {...(p !== page && { href: `?page=${p}` })}>
                    {p === page ? (
                      <>
                        {p} <span className="sr-only">(current)</span>
                      </>
                    ) : (
                      p
                    )}
                  </MDBPageNav>
                </MDBPageItem>
              ))}

              {pages > 0 && (
                <MDBPageItem disabled={page === pages}>
                  <MDBPageNav
                    aria-label="Next"
                    {...(page < pages && { href: `?page=${page + 1}` })}
                  >
                    <span aria-hidden="true">Next</span>
                  </MDBPageNav>
                </MDBPageItem>
              )}
            </MDBPagination>
          </MDBCol>
        </MDBRow>
      </styles.MDBContainerS>
    </>
  );
};

export default MovieGrid;
