import { MDBBtn, MDBCardBody, MDBCardText, MDBCol } from 'mdbreact';
import { useRouteMatch } from 'react-router-dom';
import React from 'react';

import styles from './MovieCardnGrid.styles';

const MovieCard = (props) => {
  const match = useRouteMatch();
  console.debug(`MovieCard match:`, match);
  return (
    <>
      <MDBCol lg="4" md="6">
        <styles.DivS>
          <styles.MDBCardS>
            <styles.MDBCardImageS className="img-fluid" src={props.img} waves />
            <MDBCardBody>
              <styles.MDBCardTitleS>{props.title}</styles.MDBCardTitleS>
              <MDBCardText>{props.description}</MDBCardText>
              <MDBBtn href={`/movie/${props._id}`}>Read More</MDBBtn>
            </MDBCardBody>
          </styles.MDBCardS>
        </styles.DivS>
      </MDBCol>
    </>
  );
};

export default MovieCard;
