import React from 'react';
import { MDBBtn, MDBCardBody, MDBCardText, MDBCol } from 'mdbreact';

import styles from './MovieCardnGrid.styles';

const MovieCard = (props) => {
  return (
    <>
      <MDBCol lg="4" md="6">
        <styles.DivS>
          <styles.MDBCardS>
            <styles.MDBCardImageS className="img-fluid" src={props.img} waves />
            <MDBCardBody>
              <styles.MDBCardTitleS>{props.title}</styles.MDBCardTitleS>
              <MDBCardText>{props.description}</MDBCardText>
              <MDBBtn href={`movie/${props._id}`}>Read More</MDBBtn>
            </MDBCardBody>
          </styles.MDBCardS>
        </styles.DivS>
      </MDBCol>
    </>
  );
};

export default MovieCard;
