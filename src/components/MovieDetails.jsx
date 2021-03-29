import _ from "lodash";
import { Redirect, useParams } from "react-router-dom";
import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdbreact";

import styled from "styled-components";

import { getMovieByID } from "../services/movies";

const MDBColS = (props) => {
  const { movie, className, children } = props;
  const MDBColStyled = styled(MDBCol)`
    background-image: url(${movie.imgDetail}),
      linear-gradient(to right, #484848, #ffffff);
    min-height: 70vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
  `;
  return <MDBColStyled className={className}>{children}</MDBColStyled>;
};

const MovieDetails = () => {
  const params = useParams();
  const mid = _.get(params, "mid");
  const movie = getMovieByID(mid);

  return (
    <>
      {_.isUndefined(movie) ? (
        <Redirect to="/notfound" />
      ) : (
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol style={{ padding: 0 }}>
              <MDBJumbotron style={{ padding: 0 }}>
                <MDBColS className="text-white py-5 px-5 my-5" movie={movie}>
                  <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-weight-bold">
                      {movie.title}
                    </MDBCardTitle>
                    <MDBRow>
                      <MDBCol lg="6">
                        <p className="mx-5 mb-5" style={{ lineHeight: "2" }}>
                          {movie.description}
                        </p>
                      </MDBCol>
                      <MDBCol lg="6"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2">
                        <p className="mx-5 mb-5">
                          <span className="font-weight-bold text-nowrap">
                            Directed By{" "}
                          </span>
                          <br />
                          {movie.directed}
                        </p>
                      </MDBCol>
                      <MDBCol md="2">
                        <p className="mx-5 mb-5 text-nowrap">
                          <span className="font-weight-bold">
                            Released Year
                          </span>
                          <br />
                          {movie.released}
                        </p>
                      </MDBCol>
                      <MDBCol md="2">
                        <p className="mx-5 mb-5">
                          <span className="font-weight-bold"> Runtime </span>
                          <br />
                          {movie.runtime}
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBColS>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        // <div>
        //   <img src={movie.imgDetail} className="img-fluid" alt={movie.title} />
        //   <p>Title: {movie.title}</p>
        //   <p>Category: {movie.category.name}</p>
        //   <p>Release Year: {movie.released}</p>
        //   <p>Description: {movie.description}</p>
        // </div>
      )}
    </>
  );
};

export default MovieDetails;
