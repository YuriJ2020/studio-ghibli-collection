import _ from "lodash";
import { Redirect, useParams } from "react-router-dom";
import { React, useEffect } from "react";
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
    min-height: 86vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
  `;
  return <MDBColStyled className={className}>{children}</MDBColStyled>;
};

const MovieDetails = () => {
  // Window Scroll to Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const mid = _.get(params, "mid");
  const movie = getMovieByID(mid);

  return (
    <>
      {_.isUndefined(movie) ? (
        <Redirect to="/notfound" />
      ) : (
        <MDBContainer fluid>
          <div>
            <MDBRow>
              <MDBCol className="p-0">
                <MDBJumbotron className="p-0">
                  <MDBColS className="white-text py-5" movie={movie}>
                    <MDBCol className="pt-2">
                      <MDBCardTitle className="h1-responsive m-5 font-weight-bold">
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
                              Directed By
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
          </div>
        </MDBContainer>
      )}
    </>
  );
};

export default MovieDetails;
