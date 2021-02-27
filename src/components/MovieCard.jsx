import React from "react";
import _ from "lodash";

import styled from "styled-components";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

const MDBContainerS = styled(MDBContainer)`
  text-align: center;
  margin-top: 5rem;
`;

const MDBCardTitleS = styled(MDBCardTitle)`
  text-align: center;
`;

const MDBCardS = styled(MDBCard)`
  width: 18rem;
  border-radius: 1.6rem;
`;

const Div = styled.div`
  padding-bottom: 2.6rem;
`;

export default (props) => {
  return (
    <>
      <MDBContainerS className="mx-auto text-center">
        <MDBRow>
          <MDBCol lg="4" md="6">
            <Div>
              <MDBCardS>
                <MDBCardImage
                  className="img-fluid"
                  src={props.img}
                  style={{ borderRadius: "1.6rem 1.6rem 0 0 " }}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitleS>{props.title}</MDBCardTitleS>
                  <MDBCardText>{props.description}</MDBCardText>
                  <MDBBtn href={`movie/${props._id}`}>Read More</MDBBtn>
                </MDBCardBody>
              </MDBCardS>
            </Div>
          </MDBCol>
        </MDBRow>
      </MDBContainerS>
    </>
  );
};
