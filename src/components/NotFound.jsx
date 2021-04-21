import { MDBContainer, MDBNavLink, MDBBtn } from "mdbreact";
import React from "react";
import styled from "styled-components";
import TotoroIcon from "../assets/totoro-icon.svg";

const H1 = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  background: linear-gradient(to right, #1e9ff7, #08f6ab);
  -webkit-background-clip: text;
  color: transparent;
`;

/**
 * NotFound Component.
 * @returns NotFount React Component.
 */
const NotFound = () => {
  return (
    <MDBContainer
      className="d-flex justify-content-center align-items-center text-center"
      style={{ height: "86vh" }}
    >
      <div className="d-block">
        <img src={TotoroIcon} height="280" alt="icon" loading="lazy" />
        <H1 className="py-2">404</H1>

        <h2 className="pb-3">Oh No! Page not found.</h2>

        <MDBNavLink to="/?page=1" className="white-text">
          <MDBBtn>Go to Home</MDBBtn>
        </MDBNavLink>
      </div>
    </MDBContainer>
  );
};

export default NotFound;
