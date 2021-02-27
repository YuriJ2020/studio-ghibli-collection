import _ from 'lodash';
import React from 'react';
import { MDBBtn, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

import styles from './MovieCardnGrid.styles';

export default (props) => {
  return (
    <>
      <MDBCol lg="4" md="6">
        <styles.DivS>
          <styles.MDBCardS>
            <MDBCardImage
              className="img-fluid"
              src={props.img}
              style={{ borderRadius: '1.6rem' }}
              waves
            />
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
