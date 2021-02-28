import { MDBBtn, MDBCardBody, MDBCardText } from 'mdbreact';
import { Link, useRouteMatch } from 'react-router-dom';
import React from 'react';

import styles from './MovieCardnGrid.styles';

const MovieCard = (props) => {
  const match = useRouteMatch();
  const detailsPath = `/movie/${props._id}`;

  console.debug(`MovieCard match:`, match);

  return (
    <>
      <styles.DivS>
        <styles.MDBCardS>
          <Link to={detailsPath}>
            <styles.MDBCardImageS className="img-fluid" src={props.img} waves />
          </Link>
          <MDBCardBody>
            <styles.MDBCardTitleS>{props.title}</styles.MDBCardTitleS>
            <MDBCardText>{props.description}</MDBCardText>
            <MDBBtn href={detailsPath}>Read More</MDBBtn>
          </MDBCardBody>
        </styles.MDBCardS>
      </styles.DivS>
    </>
  );
};

export default MovieCard;
